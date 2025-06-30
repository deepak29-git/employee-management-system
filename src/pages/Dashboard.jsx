import React, { useState } from "react";
import { Grid } from "../component/Grid";
import EmployeeList from "../component/EmployeeList";
import SideBar from "../component/SideBar";
import { Header } from "../component/Header";
import BasicModal from "../component/ModalComponent";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <Grid>
      <Header setSearch={setSearch} />
      <SideBar setFilter={setFilter} />
      <EmployeeList search={search} filter={filter} />
    </Grid>
  );
};

export default Dashboard;
