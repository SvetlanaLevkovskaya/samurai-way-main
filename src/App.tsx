import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {AppType} from "./redux/state";


function App(props: AppType) {

  return (

    <div className="app-wrapper">
      <Header />
      <NavBar />


      <div className="app-wrapper-content">
        {/*       <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile"  component={Profile} />
          <Route path="/news"  component={News} />
          <Route path="/musics"  component={Music} />
          <Route path="/settings"  component={Settings} />*/}

        <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                      messages={props.state.dialogsPage.messages} />} />
        <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/musics" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />

      </div>
    </div>
  )

}

export default App;
