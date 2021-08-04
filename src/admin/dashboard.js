// import React from 'react';
import { Component } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "80px",
  },
  card: {
    maxWidth: 600,
    margin: " auto",
    padding: "20px 5px",
  },
});

export default function Dashborad() {
  const style = useStyles();
  return (
    <>
      <Navbar />
      <Card className={style.card}>
        Welcome to admin dashboard.
        <hr />
        Navigate to the blue navigation bar to perform further activities.
      </Card>
      ;
    </>
  );
}
