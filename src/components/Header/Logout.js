import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

function Logout() {
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
  if (redirect) {
    return <Redirect push to="/" />;
  }
  return (
    <>
      <IconButton edge="end" onClick={handleProfileMenuOpen} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu open={open} onClose={handleProfileMenuClose} anchorEl={anchorEl}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Logout;
