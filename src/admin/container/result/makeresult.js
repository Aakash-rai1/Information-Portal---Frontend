import { Autorenew } from "@material-ui/icons";
import React from "react";
import Navbar from "../../components/Navbar";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

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

export default function MakeResult() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />

      <Card className={classes.card}>
        <CardContent>
          <form>
            <Typography gutterBottom variant="h5">
              Add Result
            </Typography>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter First Subject"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Marks Obtained"
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>

              <br />

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Second Subject"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Marks Obtained"
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Third Subject"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Marks Obtained"
                  variant="outlined"
                  type="number"
                  fullWidth
                  required
                />
              </Grid>

              <br />

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Fourth Subject"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Enter Marks Obtained"
                  type="number"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid xs={12} item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
