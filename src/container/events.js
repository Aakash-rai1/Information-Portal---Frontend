import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/include/header";
import Footer from "../components/include/footer";
import { Grid } from "@material-ui/core";

import Eventscard from "../components/eventscard";

const useStyles = makeStyles(() => ({
  container: {
    margin: 30,
    alignItems: "center",
  },
  gridcontainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  header: {
    margin: "auto",
    fontSize: "20px",
    marginBottom: 20,

    textAlign: "center",
  },
}));

export default function Events() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.container} justifyContent="center">
        <div className={classes.header}>
          <h3>Events</h3>
        </div>

        <div class="row">
          <Eventscard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
