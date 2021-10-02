import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import Header from "../components/include/header";
import Footer from "../components/include/footer";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div>
    //   <Button
    //     aria-controls="customized-menu"
    //     aria-haspopup="true"
    //     variant="contained"
    //     color="primary"
    //     onClick={handleClick}
    //   >
    //     Open Menu
    //   </Button>
    //   <StyledMenu
    //     id="customized-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <StyledMenuItem>
    //       <ListItemIcon>
    //         <SendIcon fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText primary="Sent mail" />
    //     </StyledMenuItem>
    //     <StyledMenuItem>
    //       <ListItemIcon>
    //         <DraftsIcon fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText primary="Drafts" />
    //     </StyledMenuItem>
    //     <StyledMenuItem>
    //       <ListItemIcon>
    //         <InboxIcon fontSize="small" />
    //       </ListItemIcon>
    //       <ListItemText primary="Inbox" />
    //     </StyledMenuItem>
    //   </StyledMenu>
    //   <Footer />
    // </div>
    <>
      <div class="hero_area">
        <Header />

        {/* Home Content */}
        <section class=" slider_section position-relative">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class=""
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                class=""
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box">
                        <div>
                          <h1>E D U C A T I O N</h1>
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box">
                        <div>
                          <h1>E D U C A T I O N</h1>
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="detail-box">
                        <div>
                          <h1>E D U C A T I O N</h1>
                          <a href="">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="special_section">
        <div class="container">
          <div class="special_container">
            <div class="box b1">
              <div class="img-box">
                <img src="images/award.png" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  INFORMATION <br />
                  PORTAL
                </h4>
                <a href="">Read More</a>
              </div>
            </div>
            <div class="box b2">
              <div class="img-box">
                <img src="images/study.png" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  SEE <br />
                  RESULT
                </h4>
                <a href="">Read More</a>
              </div>
            </div>
            <div class="box b3">
              <div class="img-box">
                <img src="images/books-stack-of-three.png" alt="" />
              </div>
              <div class="detail-box">
                <h4>
                  Examination <br />
                  Location
                </h4>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about_section layout_padding">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="img_container">
                <div class="img-box b1">
                  <img src="images/a-1.jpg" alt="" />
                </div>
                <div class="img-box b2">
                  <img src="images/a-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h3>About Our Information Portal</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more it
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="course_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container">
            <h3>SUBJECTS</h3>
            <p>
              It is a long established fact that a reader will be distracted
            </p>
          </div>
          <div class="course_container">
            <div class="course_content">
              <div class="box">
                <img src="images/c-1.jpg" alt="" />
                <a href="" class="">
                  <img src="images/link.png" alt="" />
                </a>
                <h5>
                  LMS <br />
                  Content
                </h5>
              </div>
              <div class="box">
                <img src="images/c-2.jpg" alt="" />
                <a href="" class="">
                  <img src="images/link.png" alt="" />
                </a>
                <h5>
                  From <br />
                  Zero to Hero
                </h5>
              </div>
            </div>
            <div class="course_content">
              <div class="box">
                <img src="images/c-3.jpg" alt="" />
                <a href="" class="">
                  <img src="images/link.png" alt="" />
                </a>
                <h5>
                  Learn <br />
                  Python – Interactive
                </h5>
              </div>
              <div class="box">
                <img src="images/c-4.jpg" alt="" />
                <a href="" class="">
                  <img src="images/link.png" alt="" />
                </a>
                <h5>
                  Your <br />
                  Complete Guide
                </h5>
              </div>
              <div class="box">
                <img src="images/c-5.jpg" alt="" />
                <a href="" class="">
                  <img src="images/link.png" alt="" />
                </a>
                <h5>Photography</h5>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      <section class="event_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h3>Events</h3>
            <p>Upcoming Education Events to feed your brain.</p>
          </div>
          <div class="event_container">
            <div class="box">
              <div class="img-box">
                <img src="images/event-img.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>Education Events 2021</h4>
                <h6>8:00 AM - 5:00 PM VENICE, ITALY</h6>
              </div>
              <div class="date-box">
                <h3>
                  <span>15</span>
                  March
                </h3>
              </div>
            </div>
            <div class="box">
              <div class="img-box">
                <img src="images/event-img.jpg" alt="" />
              </div>
              <div class="detail-box">
                <h4>Education Events 2021</h4>
                <h6>8:00 AM - 5:00 PM VENICE, ITALY</h6>
              </div>
              <div class="date-box">
                <h3>
                  <span>15</span>
                  February
                </h3>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      <section class="client_section layout_padding-bottom">
        <div class="container">
          <div class="heading_container">
            <h3>What People Say</h3>
            <p>
              It is a long established fact that a reader will be distracted
            </p>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>Distracted by</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>Distracted by</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div class="detail-box">
                    <h5>Distracted by</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-box">
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="contact_section ">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h3>Contact Us</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="contact-form">
                <h5>Get In Touch</h5>
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Message"
                      class="input_message"
                    />
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn_on-hover">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
