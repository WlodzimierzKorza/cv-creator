import { List } from "@mui/material";
import SingleStep from "./SingleStep";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <List>
      <Link to="/">
        <SingleStep primary="Header" count={1} />
      </Link>
      <Link to="/experience">
        <SingleStep primary="Experience" count={2} />
      </Link>
      <Link to="/education">
        <SingleStep primary="Education" count={3} />
      </Link>

      <SingleStep primary="Skills" count={4} />
      <SingleStep primary="Summary" count={5} />
      <SingleStep primary="Finalise" count={6} />
    </List>
  );
};

export default Steps;
