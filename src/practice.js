import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
const practice = () => {
  return (
    <Grid container>
      <Grid item md={1} style={{ backgroundColor: "green" }}>
        lol1
      </Grid>

      <Grid item md={11} style={{ backgroundColor: "red" }}>
        lol2
      </Grid>
    </Grid>
  );
};

export default practice;
