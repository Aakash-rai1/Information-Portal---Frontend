import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/include/header";
import Footer from "../components/include/footer";
import { Grid } from "@material-ui/core";

import Newscard from "../components/newscard";

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

export default function News() {
  const classes = useStyles();

  return (
    <div className="sub_page">
      <div class="hero_area">
        <Header />
      </div>
      {/* <div className={classes.container} justifyContent="center"> */}
      {/* <div className={classes.header}>
          <h3>News & Announcements</h3>
        </div> */}

      <Newscard />
      {/* </div> */}
      <Footer />
    </div>
  );
}
