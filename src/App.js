import React from "react";
import authors from "./data";

//cmoponents
import SideBar from "./sidebar"
import AuthorCard from "./AuthorCard"
import AuthorsList from "./AuthorsList"

function App() {

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <AuthorsList authors={authors} />
      </div>
    </div>
  );
}

export default App;
