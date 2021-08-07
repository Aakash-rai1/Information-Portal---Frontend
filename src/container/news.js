import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Header from "../components/include/header";
import Footer from "../components/include/footer";
// import { Button } from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

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
        {isReadMore ? (
          <Button variant="contained" color="primary">
            read more
          </Button>
        ) : (
          <Button variant="contained" color="secondary">
            show less
          </Button>
        )}
      </span>
    </p>
  );
};

export default function News() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.container} justifyContent="center">
        <div className={classes.header}>
          <h3>News & Announcements</h3>
        </div>

        <div>
          <Grid
            container
            spacing={3}
            className={classes.gridcontainer}
            justify="center"
          >
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
      </div>
      <Footer />
    </div>
  );
}
