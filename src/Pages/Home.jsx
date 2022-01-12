import React from "react";
import UsersTable from "../Components/Table";
import Appbar from "../Components/Navbar";
import "./Home.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justifcy-content: center;
  align-items: center;
`;

function Home() {
  return (
    <Container>
      <Appbar />
      <UsersTable />
    </Container>
  );
}

export default Home;
