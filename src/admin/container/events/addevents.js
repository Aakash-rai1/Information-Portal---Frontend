import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../components/Navbar";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    padding: 50,
    maxWidth: 900,
    margin: "auto",
  },
  image: {
    backgroundImage: "url(img/login.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddEvents() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Navbar />
      <CssBaseline />

      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={2} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Events
          </Typography>
          <form className={classes.form}>
            <TextField
              xs={12}
              id="filled-full-width"
              label="Event Title"
              style={{ margin: 8 }}
              placeholder="Enter Your Event Title"
              helperText="Title must not be empty"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              required
            />

            <TextField
              xs={12}
              variant="outlined"
              margin="normal"
              required
              multiline
              defaultValue="Write your content here.."
              fullWidth
              id="email"
              label="Content"
              name="email"
              rows={8}
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add News
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
