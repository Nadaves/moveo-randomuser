import React from "react";
import Usercard from "../Components/Usercard";
import Map from "../Components/Map";
import { useSelector } from "react-redux";

function User() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <h1>This is the USER page</h1>
      <Usercard />
      <Map
        lat={user.value.location.coordinates.latitude}
        long={user.value.location.coordinates.longitude}
      />
    </div>
  );
}

export default User;
