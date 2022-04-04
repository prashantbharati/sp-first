import { makeStyles } from "@material-ui/core/styles";
import roofimg1 from "./images/roofimg1.jpg";
import mountain from "./images/mountain.jpg";
export default makeStyles((theme) => ({
  image: {
    // marginRight: "15px",
  },

  title: {
    fontWeight: "bold",
    color: "white",
  },
  navfirst: {
    boxSizing: "border-box",
    marginRight: "1000px",
  },
  div1: {
    backgroundColor: "black",
    height: "100vh",
    backgroundImage: `url(${roofimg1})`,
  },
  div2: {
    backgroundColor: "red",
    height: "40vh",
    backgroundImage: `url(${mountain})`,
  },
  div3: {
    backgroundColor: "orange",
    height: "100vh",
  },
  div4: {
    backgroundColor: "pink",
    height: "100vh",
  },
  div5: {
    backgroundColor: "violet",
    height: "75vh",
  },
  div6: {
    backgroundColor: "grey",
    height: "75vh",
  },
  div7: {
    backgroundColor: "blue",
    height: "75vh",
  },
  div8: {
    backgroundColor: "green",
    height: "75vh",
  },
  div9: {
    backgroundColor: "yellow",
    height: "75vh",
  },
  footer: {
    backgroundColor: "black",
    height: "10vh",
  },
}));
