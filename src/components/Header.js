import { Toolbar, Box, IconButton, AppBar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CV Creator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
