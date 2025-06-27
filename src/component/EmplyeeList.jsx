import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@atlaskit/spinner";
import DynamicTable from "@atlaskit/dynamic-table";

function EmplyeeList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  const head = {
    cells: [
      {
        key: "firstName" + " " + "lastName",
        content: "Name",
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
    ],
  };

  const rows = users.map(
    ({ id, firstName, lastName, company, bloodGroup, email, phone }) => ({
      key: id.toString(),
      cells: [
        {
          key: firstName + lastName,
          content: `${firstName} ${lastName}`,
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
      ],
    })
  );
  return (
    <div>
      {loading && (
        <Spinner testId="spinner" interactionName="load" label="Loading" />
      )}
      {error && <p>Error fetching user data</p>}
      <div style={{ maxWidth: 800 }}>
        <DynamicTable
          head={head}
          rows={rows}
          isFixedSize
          defaultSortKey={"firstName" + " " + "lastName"}
          defaultSortOrder="ASC"
        />
      </div>
      {users.length === 0 && !loading && <p>No users found</p>}
    </div>
  );
}

export default EmplyeeList;
