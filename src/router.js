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
import ManageUser from "./admin/container/user/manageuser";
import ManageAdmin from "./admin/container/admin/manageadmin";
import ManageNews from "./admin/container/news/managenews";
import AddNews from "./admin/container/news/addnews";
import ManageEvents from "./admin/container/events/manageevents";
import AddEvents from "./admin/container/events/addevents";
import ManageResults from "./admin/container/result/manageresult";
import AddResults from "./admin/container/result/makeresult";
import AdminProfile from "./admin/container/profile";
import { Result } from "./container/Result";

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
            <Route path="/result" component={Result} />

            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/admin/addadmin" component={AdminAdd} />
            <Route path="/admin/manageAdmin" component={ManageAdmin} />
            <Route path="/admin/manageUser" component={ManageUser} />
            <Route path="/admin/manageEvents" component={ManageEvents} />
            <Route path="/admin/addEvents" component={AddEvents} />
            <Route path="/admin/manageNews" component={ManageNews} />
            <Route path="/admin/addNews" component={AddNews} />
            <Route path="/admin/manageResults" component={ManageResults} />
            <Route path="/admin/addresult" component={AddResults} />
            <Route path="/admin/profile" component={AdminProfile} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Router;
