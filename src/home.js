import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import memories from "./images/memories.png";
import razorpay from "./images/razorpayimg.webp";
import aws from "./images/awsimg.png";
import useStyles from "./styles";
const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.div1}>
        <br />

        <Grid container spacing={2}>
          <Grid item></Grid>

          <Grid item>
            <img src={memories} alt="memories" height="60" />
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

        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={classes.div11}>
            <Typography className={classes.div1text}>
              Never Pay Without Using Scropay
            </Typography>

            <br />
            <Typography style={{ color: "grey" }}>
              Skropay is a secure transaction platform that completely protects
              you from being scammed when you want to buy or sell online with
              someone you don't know
            </Typography>

            <br />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  color: "black",
                  borderWidth: 1,
                  border: "2px ",
                  borderColor: "blue",
                  textTransform: "none",
                  width: "150px",
                  borderRadius: "999px 999px 999px 999px",
                  textAlign: "center",
                  backgroundColor: "white",
                  fontWeight: "700",
                }}
                variant="contained"
                align="right"
              >
                I am a Seller
              </Button>

              <Button
                style={{
                  color: "white",
                  borderWidth: 1,
                  border: "2px solid",
                  borderColor: "white",
                  textTransform: "none",
                  width: "150px",
                  borderRadius: "999px 999px 999px 999px",
                }}
                variant="outline-dark"
                align="right"
              >
                I am a Buyer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.div2}>
        <Grid container>
          <Grid item md={7}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Your trust matters the most
              </Typography>

              <Typography
                style={{
                  color: "grey",
                  // fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                With skropay your money and data is in safe hand
              </Typography>
            </div>
          </Grid>

          <Grid item md={2.5}>
            <img src={razorpay} alt="razorpay" height="200" />
          </Grid>

          <Grid item md={2.5}>
            <br />
            <br />

            <img src={aws} alt="memories" height="130" />
          </Grid>
        </Grid>
      </div>

      <div className={classes.div3}>
        <Grid container>
          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "120%",
              }}
            >
              <div
                style={{
                  width: "80%",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "60px",
                  }}
                >
                  Stay Carefree,Never worry about frauds
                </Typography>

                <Typography
                  style={{
                    color: "grey",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  With Skropay accounts, your funds are transferred to the
                  seller only after we make sure you received your product
                  eliminating fraudulent transactions
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

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
