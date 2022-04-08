import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import useStyles from "./styles";
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.div1}>
        {/* <br />
        <br /> */}
        {/* <header>
          <Grid className={classes.navfirst} container spacing={12}>
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
            </Grid>
            <Grid item xs={1.5}>
              <Button
                style={{
                  color: "white",
                  borderWidth: 1,
                  border: "2px solid",
                  borderColor: "blue",
                  textTransform: "none",
                  width: "150px",
                  borderRadius: "999px 999px 999px 999px",
                  textAlign: "center",
                  backgroundColor: "blue",
                }}
                variant="contained"
                align="right"
              >
                Join Scropay
              </Button>
            </Grid>
          </Grid>
        </header> */}
        <br />

        <Grid container spacing={2}>
          <Grid item></Grid>

          <Grid item>
            <img
              // className={classes.image}
              src={memories}
              alt="memories"
              height="60"
            />
          </Grid>

          <Grid item md={6}>
            <Typography style={{ color: "white" }}>Scropay</Typography>
          </Grid>

          <Grid item>
            <Button
              style={{ color: "white", textTransform: "none" }}
              variant="outline-dark"
              align="right"
            >
              For Business
            </Button>
          </Grid>

          <Grid item>
            <Button
              style={{ color: "white", textTransform: "none" }}
              variant="outline-dark"
              align="right"
            >
              About Us
            </Button>
          </Grid>

          <Grid item>
            <Button
              style={{
                color: "blue",
                borderWidth: 1,
                border: "2px solid",
                borderColor: "blue",
                textTransform: "none",
                width: "120px",
                borderRadius: "999px 999px 999px 999px",
              }}
              variant="outline-dark"
              align="right"
            >
              Login
            </Button>
          </Grid>

          <Grid item>
            <Button
              style={{
                color: "white",
                borderWidth: 1,
                border: "2px solid",
                borderColor: "blue",
                textTransform: "none",
                width: "150px",
                borderRadius: "999px 999px 999px 999px",
                textAlign: "center",
                backgroundColor: "blue",
              }}
              variant="contained"
              align="right"
            >
              Join Scropay
            </Button>
          </Grid>
        </Grid>

        <div className={classes.div11}>
          <Typography className={classes.div1text}>
            Never Pay Without Using Scropay
          </Typography>
        </div>
        {/* <Typography className={classes.div1text}>Using Srcopay</Typography> */}
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
export default Home;
