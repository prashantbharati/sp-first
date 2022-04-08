import { makeStyles } from "@material-ui/core/styles";

import segment2 from "./images/segment 2.jpg";
import segment3 from "./images/segment 3.jpg";
import segment4 from "./images/segment 4.jpg";
import segment5 from "./images/segment 5.jpg";
import segment1 from "./images/segment 1.jpg";
import segment6 from "./images/segment 6.jpg";
import segment7 from "./images/segment 7.jpg";
import segment8 from "./images/segment 8.jpg";

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
    // backgroundColor: "black",
    height: "100vh",

    backgroundImage: `url('${segment2}')`,
    backgroundSize: "contain",
    backgroundRepeat: "y-repeat",
  },
  div2: {
    // backgroundColor: "red",
    height: "40vh",
  },
  div3: {
    height: "95vh",
    backgroundImage: `url('${segment3}')`,
    backgroundSize: "contain",
    // backgroundRepeat: "no-repeat",
  },
  div4: {
    backgroundColor: "pink",
    height: "100vh",
    backgroundImage: `url('${segment4}')`,
  },
  div5: {
    backgroundColor: "violet",
    height: "100vh",
    backgroundImage: `url('${segment5}')`,
    backgroundSize: "contain",
  },
  div6: {
    backgroundColor: "grey",
    height: "85vh",
    backgroundImage: `url('${segment1}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  div7: {
    backgroundColor: "blue",
    height: "75vh",
    backgroundImage: `url('${segment6}')`,
    backgroundSize: "contain",
  },
  div8: {
    backgroundColor: "green",
    height: "75vh",
    backgroundImage: `url('${segment7}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  div9: {
    backgroundColor: "yellow",
    height: "75vh",
    backgroundImage: `url('${segment8}')`,
    backgroundSize: "contain",
  },
  footer: {
    backgroundColor: "black",
    height: "10vh",
  },
}));
