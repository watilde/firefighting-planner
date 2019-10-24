import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

function Account() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleProfileMenuOpen = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleLogout = () => {
    setRedirect(true);
  };
  const handleClearCache = () => {
    localStorage.clear();
  };
  if (redirect) {
    return <Redirect push to="/" />;
  }
  return (
    <>
      <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu open={open} onClose={handleProfileMenuClose} anchorEl={anchorEl}>
        <MenuItem
          component="a"
          href="https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project"
          target="_blank"
        >
          Project detail
        </MenuItem>
        <MenuItem
          component="a"
          href="https://opennex.org/project/projectDetail/275"
          target="_blank"
        >
          OpenNEX
        </MenuItem>
        <MenuItem
          component="a"
          href="https://github.com/watilde/firefighting-planner"
          target="_blank"
        >
          GitHub
        </MenuItem>
        <MenuItem onClick={handleClearCache}>Clear cache</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
