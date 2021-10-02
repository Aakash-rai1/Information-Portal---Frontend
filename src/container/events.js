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
    <div className="sub_page">
      <div class="hero_area">
        <Header />
      </div>
      <Eventscard />

      <Footer />
    </div>
  );
}
