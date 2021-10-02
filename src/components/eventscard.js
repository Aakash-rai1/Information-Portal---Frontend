import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

export default function Eventscard() {
  const [events, setevents] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    const result = await axios.get("http://localhost:2020/show/events");
    console.log(result);
    const { success, data } = result;
    if (data.success) {
      console.log("cos", data);
      setevents(data.data);
    } else {
      if (data.message == "Unauthorized access!!") {
        console.log();
      }
    }
  };

  const classes = useStyles();

  return (
    <>
      <section class="event_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h3>Events</h3>
            <p>Upcoming Education Events to feed your brain.</p>
          </div>
          <div class="event_container">
            {events.map((events, index) => (
              <div class="box">
                <div class="img-box">
                  <img src="images/event-img.jpg" alt="" />
                </div>
                <div class="detail-box">
                  <h4>{events.title}</h4>
                  <h6>8:00 AM - 5:00 PM {events.location}</h6>
                </div>
                <div class="date-box">
                  <h3>
                    <span>{events.date}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div class="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>
    </>

    // <Grid item>
    //   <Card className={classes.root}>
    //     {news.map((news, index) => (
    //       <CardActionArea>
    //         <CardContent>
    //           <Typography variant="h5" component="h2">
    //             {news.title}
    //           </Typography>
    //           <CardMedia
    //             className={classes.media}
    //             image={`http://localhost:2020/image/post/${news.image}`}
    //             title="Paella dish"
    //           />
    //           <Typography variant="body2" color="textSecondary" component="p">
    //             <ReadMore>{news.content}</ReadMore>
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //     ))}
    //   </Card>
    // </Grid>
  );
}
