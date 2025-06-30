import DynamicTable from "@atlaskit/dynamic-table";
import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Shortlist = () => {
  const userData = useSelector((state) => state.users.user);

  const head = {
    cells: [
      { key: "firstName", content: "First Name" },
      { key: "bloodGroup", content: "Blood Group" },
      { key: "companyName", content: "Company Name" },
      { key: "email", content: "Email" },
      { key: "phone", content: "Phone" },
    ],
  };
  const rows = userData.map((user) => {
    const { id, firstName, lastName, company, bloodGroup, email, phone } = user;
    return {
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
    };
  });
  return (
    <Grid
      container
      spacing={2}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",

        padding: "10px 20px",
        zIndex: 1000,
        borderBottom: "1px solid #ddd",
      }}
      alignItems="center"
    >
      <Grid item>
        <Link to="/">Dashboard</Link>
      </Grid>
      <DynamicTable
        head={head}
        rows={rows}
        rowsPerPage={5}
        defaultPage={1}
        isLoading={false}
        loadingSpinnerSize="large"
        isFixedSize
        caption="Shortlist Candidates"
      />
    </Grid>
  );
};

export default Shortlist;
