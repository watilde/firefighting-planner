import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const userStoris = {
  citizen:
    "know how far wildfire is from my town and ask for help when it’s needed.",
  "firefight-team-manager":
    "manage scattered wildfire information, related data and firefighting plans in a single place.",
  firefighter:
    "learn the best practice of fire fighting planning from the past."
};

const redirectedPages = {
  citizen: "/report",
  "firefight-team-manager": "/plan",
  firefighter: "/dashboard"
};

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    margin: theme.spacing(3, 0, 0)
  },
  description: {
    fontSize: "16px",
    border: "1px solid rgba(0, 0, 0, 0.23)",
    padding: "12.5px 24px 12.5px 14px",
    borderRadius: "4px",
    minHeight: "56px"
  }
}));

function Home() {
  const classes = useStyles();
  const [role, setRole] = useState("");
  const [isEnter, setIsEnter] = useState("");
  const handleChange = e => {
    setRole(e.target.value);
  };
  const handleEnter = e => {
    setIsEnter(true);
  };

  if (isEnter) {
    return <Redirect push to={redirectedPages[role]} />;
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                Try Firefighting planner
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              as a
            </Grid>
            <Grid item xs={10}>
              <Select
                value={role}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              >
                <MenuItem value={"citizen"}>Citizen</MenuItem>
                <MenuItem value={"firefight-team-manager"}>
                  Firefight team manager
                </MenuItem>
                <MenuItem value={"firefighter"}>Firefighter</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              to
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.description}>
                {userStoris[role] || ""}
              </Typography>
            </Grid>
          </Grid>
          <Button
            disabled={!role}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleEnter}
          >
            Enter
          </Button>
        </div>
      </Container>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Created for "}
          <a
            href="https://2019.spaceappschallenge.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NASA International Space Apps Challenge 2019
          </a>
          {" and the world🌏"}
          <br />
          {"Made by "}
          <a
            href="https://2019.spaceappschallenge.org/challenges/living-our-world/spot-fire-v20/teams/firefighting-planner/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team Firefighting planner
          </a>
          {" with love💖"}
        </Typography>
      </Box>
    </>
  );
}

export default Home;
