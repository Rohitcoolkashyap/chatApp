import React from "react";
import "./App.css";
import RoomList from "./components/chat/RoomList";
import MessageList from "./components/chat/MessageList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/Join/signin";
import Chat from "./components/chat/chat";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
