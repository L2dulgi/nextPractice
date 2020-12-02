import { container, title } from "assets/jss/nextjs-material-kit.js";

const pillsStyle = {
  section: {
    // padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  button: {
    "&:hover,&:focus": {
      color: "inherit",
      background: "rgba(200, 200, 200, 0.2)"
    }
  },
};

export default pillsStyle;
