import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useStore } from "../../store/configureStore";
import Account from "./Account";
import Search from "./Search";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

function Header() {
  const { dispatch } = useStore();
  const classes = useStyle();
  const handleMenu = () => {
    dispatch({
      type: "@app/toggleDrawer"
    });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Firefighting planner
          </Typography>
          <Search />
          <Account />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
