import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Header from "../components/include/header";
import Footer from "../components/include/footer";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 30,
    alignItems: "center",
  },
  header: {
    margin: "auto",
    fontSize: 30,
    padding: 10,
    margin: 20,
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

//Readmore function
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 45) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "  ...read more" : " show less"}
      </span>
    </p>
  );
};

export default function News() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>News & Announcements</h1>
        </div>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    News Header
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReadMore>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </ReadMore>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    News Header
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReadMore>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </ReadMore>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    News Header
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReadMore>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </ReadMore>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    News Header
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReadMore>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </ReadMore>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    News Header
                  </Typography>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <ReadMore>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </ReadMore>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
