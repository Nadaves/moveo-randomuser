import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`;
export default function Usercard() {
  const user = useSelector((state) => state.user);
  function capitalizeTxt(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }
  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          image={user.value.picture.large}
          alt={user.value.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.value.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {user.value.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender: {capitalizeTxt(user.value.gender)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {user.value.age}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
