import { Toolbar, AppBar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          color={"#fff"}
        >
          CV Creator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
