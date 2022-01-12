import React from "react";
import Usercard from "../Components/Usercard";
import Map from "../Components/Map";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Userbar from "../Components/Userbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    stretch: column;
  }
`;

function User() {
  const { pathname } = useLocation();
  const username = pathname.split(":")[1];
  console.log(username);
  const user = useSelector((state) => state.user);
  return (
    <Container>
      <Userbar />
      <Wrapper>
        <Usercard />
        <Map
          lat={user.value.location.coordinates.latitude}
          long={user.value.location.coordinates.longitude}
        />
      </Wrapper>
    </Container>
  );
}

export default User;
