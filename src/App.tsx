import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />


        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile"  component={Profile} />
          <Route path="/news"  component={Profile} />
          <Route path="/music"  component={Profile} />
          <Route path="/settings"  component={Profile} />
        </div>
      </div>

    </BrowserRouter> );
}

export default App;
