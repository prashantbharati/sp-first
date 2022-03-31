import React from "react";
// import Home from "./home";
import { Typography, Button, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();

  return (
    <>
      <header>
        <Grid container spacing={12}>
          <Grid item={1}>
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Grid>

          <Grid item xs={10}>
            <Typography
              type="title"
              color="inherit"
              variant="h4"
              className={classes.title}
              gutterBottom
            >
              ProjectsHub
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <div>
              <Button variant="outline-dark" align="right">
                Sign In
              </Button>
            </div>
          </Grid>
        </Grid>
      </header>

      <div className={classes.div1}>lol</div>

      <div className={classes.div2}>lol2</div>
      <div className={classes.div3}>lol2</div>
      <div className={classes.div4}>lol2</div>
      <div className={classes.div5}>lol2</div>
      <div className={classes.div6}>lol2</div>
      <div className={classes.div7}>lol2</div>
      <div className={classes.div8}>lol2</div>
      <div className={classes.div9}>lol2</div>
      <div className={classes.footer}>lol2</div>
    </>
  );
};
export default App;
