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
            <Typography
              style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}
            >
              Skropay
            </Typography>
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
                color: "#00FFC6",
                borderWidth: 1,
                border: "2px solid",
                // borderImage:
                // "linear-gradient(to right,#4D96FF, #00FFC6) 1 border-box",
                // borderImageSlice: "1",
                borderColor: "#4D96FF",
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
                borderImage:
                  "linear-gradient( to bottom right,#4D96FF, #00FFC6)",
                textTransform: "none",
                width: "170px",
                borderRadius: "999px 999px 999px 999px",
                textAlign: "center",
                backgroundImage: "linear-gradient( to right,#4D96FF, #00FFC6)",
              }}
              variant="contained"
              align="right"
            >
              {/* 4D96FF */}
              {/* 00FFC6 */}
              Join Skropay
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
              Never Pay Without Using Skropay
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

      <div className={classes.div4}>
        <Grid container>
          <Grid item md={6}></Grid>

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
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "60px",
                  }}
                >
                  Revolutionizing online payments and putting you first.
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "grey",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  We keep your money safe with us in our protected e wallets so
                  you have the choice to make secure transactions without
                  worrying about anything else
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.div5}>
        <Grid container>
          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "200%",
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
                  Your Security is our First Priority
                </Typography>
                <br />
                <br />

                <Typography
                  style={{
                    color: "grey",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  we leave no stone unturned to keep your money safe with us
                  when you use our services
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.div6}>
        <Grid container>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "500%",
              }}
            >
              <div
                style={{
                  width: "80%",
                }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "60px",
                  }}
                >
                  Name the price
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "black",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Using Skropay find the buyer of your choice
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.div7}>
        <Grid container>
          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "400%",
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
                  Sit and rest
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "grey",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Once you pay for your product we will guard your money with us
                  till the product arrive
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.div8}>
        <Grid container>
          <Grid item md={6}></Grid>

          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "250%",
              }}
            >
              <div
                style={{
                  width: "80%",
                }}
              >
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "60px",
                  }}
                >
                  More power to you
                </Typography>
                <br />
                <br />
                <Typography
                  style={{
                    color: "black",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Release the funds only after you get the product you ordered
                  from the buyer
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.div9}>
        <Grid container>
          <Grid item md={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // textAlign: "center",
                height: "350%",
                width: "80%",
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
                  Shake and pay
                </Typography>
                <br />
                <br />
                <Typography
                  style={{
                    color: "grey",
                    // fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  Negotiate a price in chats and transfer funds using your
                  Skropay wallet
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80%",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Say hello to a whole new world of scam free and non fraudulent
            transactions when you pay with Skropay
          </Typography>
        </div>

        <br />
        <div
          style={{
            width: "80%",
          }}
        >
          <Typography
            style={{
              color: "grey",
            }}
          >
            Skropay is meant to introduce and promote a new type of payment
            system to the people. We will make digital transactions more secure
            and reliable by safeguarding your money in our wallets until your
            order/product is delivered to you.
          </Typography>
        </div>
      </div>

      <div className={classes.footer}>lol2</div>
    </>
  );
};
export default Home;
