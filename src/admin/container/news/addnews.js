import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Navbar from "../../components/Navbar";
import axios from "axios";

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

export default function AddNews() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  // const sendprofilepic = () => {
  //   let formdata = new FormData();
  //   formdata.append("image", this.state.profileimage[0]);
  //   console.log(this.state.profileimage[0]);
  //   axios
  //     .put(
  //       "http://localhost:2020/admin/addnews" + this.state.user._id,
  //       formdata,
  //       this.state.config
  //     )
  //     .then(function () {
  //       window.location.reload();
  //     });
  // };

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
            News
          </Typography>
          <form className={classes.form}>
            <TextField
              id="filled-full-width"
              label="Title"
              style={{ margin: 8 }}
              placeholder="Enter Your Title"
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

            <div>Image</div>

            <input
              className="form-control"
              type="file"
              onChange={(event) =>
                this.setState({ profileimage: event.target.files })
              }
              placeholder="Upload Image"
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
