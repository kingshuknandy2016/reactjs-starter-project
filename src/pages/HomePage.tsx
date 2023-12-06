import React from 'react';
import { ButtonAppBar } from '../layouts/navbar';
import { Box, Container, Grid } from '@mui/material';
import { Counter } from './ClickCounter';

const HomePage = () => {
  return (
    <React.Fragment>
      <ButtonAppBar></ButtonAppBar>
      <Container>
        <Box>
          <Grid
            color={'blue'}
            display="flex"
            alignItems="center"
            justifyContent={'center'}
          >
            <h1>Welcome To the Home Page</h1>
          </Grid>
          <h1>
            New React Typescript Webpack Starter Template -{' '}
            {process.env.NODE_ENV} -{process.env.name}
          </h1>
          <a href={'https://webpack-v3.jsx.app/loaders/html-loader/'}>
            Test Anchor
          </a>
          <Counter></Counter>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
