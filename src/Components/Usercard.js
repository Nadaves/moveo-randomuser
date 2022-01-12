import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Usercard() {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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
          Gender: {user.value.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {user.value.age}
        </Typography>
      </CardContent>
    </Card>
  );
}
