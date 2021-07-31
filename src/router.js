import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Components

import Home from "./container/home";
import Login from "./container/login";
import Events from "./container/events";
import News from "./container/news";

//admin components
import AdminLogin from "./admin/Login";
import Dashboard from "./admin/dashboard";
import AdminAdd from "./admin/container/admin/addadmin";
import UpdateUser from "./admin/container/user/updateuser";

class Router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/news" component={News} />

            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin/add" component={AdminAdd} />
            <Route path="/admin/updateUser" component={UpdateUser} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
