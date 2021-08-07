import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

export default function Newscard() {
  const [news, setnews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get("http://localhost:2020/show/news");
    console.log(result);
    const { success, data } = result;
    if (data.success) {
      console.log("cos", data);
      setnews(data.data);
    } else {
      if (data.message == "Unauthorized access!!") {
        console.log();
      }
    }
  };

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {news.map((news, index) => (
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              {news.title}
            </Typography>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              <ReadMore>{news.content}</ReadMore>
            </Typography>
          </CardContent>
        </CardActionArea>
      ))}
    </Card>
  );
}
