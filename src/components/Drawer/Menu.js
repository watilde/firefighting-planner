import React from "react";
import { ListItem, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

const MENU = [
  {
    label: "Reporter",
    pathname: "/report"
  },
  {
    label: "Planner",
    pathname: "/plan"
  },
  {
    label: "Dashboard",
    pathname: "/dashboard"
  }
];

const useStyle = makeStyles(() => ({
  list: {
    padding: 0
  },
  listHeader: {
    fontWeight: "bold"
  },
  listLink: {
    textDecoration: "none",
    color: "#000"
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee"
    },
    "&.active": {
      backgroundColor: "#ddd"
    }
  }
}));

function Menu() {
  const location = useLocation();
  const classes = useStyle();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>Menu</ListItem>
      {MENU.map(item => {
        const className =
          location.pathname === item.pathname
            ? `${classes.listItem} active`
            : classes.listItem;
        return (
          <Link
            key={item.label}
            to={item.pathname}
            className={classes.listLink}
          >
            <ListItem className={className}>{item.label}</ListItem>
          </Link>
        );
      })}
    </List>
  );
}

export default Menu;
