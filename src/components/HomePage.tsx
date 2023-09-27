import React from "react";
import { ButtonAppBar } from "./navbar/navbar";
import { Box, Container, Grid } from "@mui/material";

const HomePage = () => {
  return (
    <React.Fragment>
      <ButtonAppBar></ButtonAppBar>
      <Container>
        <Box>
          <Grid
            color={"blue"}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <h1>Welcome To the Home Page</h1>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
