
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AddUser } from "./component/users/AddUser";
import { EditUser } from "./component/users/EditUser";
import  UserList  from "./component/users/UserList";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}