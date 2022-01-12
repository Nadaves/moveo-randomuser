import React from "react";
import Usercard from "../Components/Usercard";
import Map from "../Components/Map";
import { useSelector } from "react-redux";
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
  @media screen and (min-width: 768px) {
    flex-direction: row;

    width: 80%;
  }
`;

function User() {
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
