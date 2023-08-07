import { Toolbar, AppBar, Typography } from "@mui/material";
import Steps from "./Steps/Steps";

const Header = () => {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            color={"#fff"}
          >
            CV Creator
          </Typography>
        </Toolbar>
      </AppBar>
      <Steps />
    </>
  );
};

export default Header;
