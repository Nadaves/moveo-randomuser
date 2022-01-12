import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  margin-bottom: 1em;
`;

export default function Userbar() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#fff" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "grey.900" }}
            >
              User Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
}
