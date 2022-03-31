import React from "react";
// import Home from "./home";
import { Typography, Button, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.div1}>
        <br />
        <br />
        <Grid container spacing={12}>
          <Grid item={1}>
            <img
              className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Grid>

          <Grid item xs={6}>
            <Typography
              type="title"
              color="inherit"
              variant="h6"
              className={classes.title}
              gutterBottom
            >
              ProjectsHub
            </Typography>
          </Grid>

          <Grid item xs={1.5}>
            <div>
              <Button
                style={{ color: "white", textTransform: "none" }}
                variant="outline-dark"
                align="right"
              >
                For Business
              </Button>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div>
              <Button
                style={{ color: "white", textTransform: "none" }}
                variant="outline-dark"
                align="right"
              >
                About Us
              </Button>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div>
              <Button
                style={{
                  color: "blue",
                  borderWidth: 1,
                  border: "2px solid",
                  borderColor: "blue",
                  textTransform: "none",
                  width: "100px",
                  borderRadius: "999px 999px 999px 999px",
                }}
                variant="outline-dark"
                align="right"
              >
                Login
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>

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
