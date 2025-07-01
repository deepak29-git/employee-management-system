import React, { useState, useEffect } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import Pagination from "@atlaskit/pagination";
import { useDebounce } from "../customhook/useDebounce";
import Button from "@atlaskit/button/new";
import { Link } from "react-router-dom";
import { fetchUsers, setUser } from "../redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { commonEncodeURIComponent } from "../utilities/utils";
import { filterData } from "../utilities/constant";
import ModalComponent from "./ModalComponent";

function EmployeeList({ search, filter }) {
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(commonEncodeURIComponent(search), 500);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const { data, loading, error } = useSelector((state) => state.users);
  const recordsPerPage = 15;

  const filterParam = filter
    ? `/filter?key=${filterData[filter]}&value=${commonEncodeURIComponent(
        filter
      )}`
    : "";

  const searchParam = debouncedSearch ? `/search?q=${debouncedSearch}` : "";
  const paginationParam =
    !debouncedSearch && !filter
      ? `?limit=${recordsPerPage}&skip=${(page - 1) * recordsPerPage}`
      : "";
  const finalUrl = `https://dummyjson.com/users${searchParam}${filterParam}${paginationParam}`;

  useEffect(() => {
    dispatch(fetchUsers(finalUrl));
  }, [debouncedSearch, filter, page]);

  const totalPages = Math.ceil(data.total / recordsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const detailsHandler = (user) => {
    setOpen(true);
    setSelectedUser(user);
  };
  const head = {
    cells: [
      {
        key: "firstName" + " " + "lastName",
        content: "Name",
        isSortable: true,
      },
      {
        key: "age",
        content: "age",
        isSortable: true,
      },
      {
        key: "companyName",
        content: "Company Name",
        isSortable: true,
      },
      {
        key: "bloodGroup",
        content: "Blood Group",
        isSortable: true,
      },
      {
        key: "email",
        content: "Email",
        isSortable: true,
      },
      {
        key: "phone",
        content: "Phone",
        isSortable: true,
      },
      {
        key: "actions",
        content: "Actions",
      },
    ],
  };

  const rows = data.users?.map((user) => {
    const { id, firstName, age, lastName, company, bloodGroup, email, phone } =
      user;
    return {
      key: id.toString(),
      cells: [
        {
          key: firstName + lastName,
          content: `${firstName} ${lastName}`,
        },
        {
          key: age,
          content: age,
        },
        {
          key: company.name,
          content: company.name,
        },
        {
          key: bloodGroup,
          content: bloodGroup,
        },
        {
          key: email,
          content: email,
        },
        {
          key: phone,
          content: phone,
        },
        {
          key: "actions",
          content: (
            <Button appearance="primary" onClick={() => detailsHandler(user)}>
              Details
            </Button>
          ),
        },
      ],
    };
  });
  return (
    <div className="main">
      <Link to="/shortlist">Shortlist</Link>
      {error && <p>Error fetching user data: {error}</p>}
      <div>
        <DynamicTable
          head={head}
          rows={rows}
          isFixedSize
          defaultSortKey={"firstName" + " " + "lastName"}
          defaultSortOrder="ASC"
          caption="List of Employees"
          isLoading={loading}
          emptyView={<h2>No Data</h2>}
        />
        <Pagination
          nextLabel="Next"
          label="Page"
          pageLabel="Page"
          pages={pages}
          previousLabel="Previous"
          onChange={() => setPage((page) => page + 1)}
        />
        <ModalComponent
          selectedUser={selectedUser}
          open={open}
          setOpen={setOpen}
        />
      </div>
    </div>
  );
}

export default EmployeeList;
