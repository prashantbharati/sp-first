import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
const practice = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={4}>
        <h1 style={{ backgroundColor: "green", height: "250px" }}>lol1</h1>
      </Grid>

      <Grid item lg={4}>
        <h1 style={{ backgroundColor: "red", height: "250px" }}>lol1</h1>
      </Grid>

      {/* <Grid item md={2} style={{ backgroundColor: "orange", height: "250px" }}>
        <h1>lol1</h1>
      </Grid> */}
    </Grid>
  );
};

export default practice;
