import React, {Fragment} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Companies from "./Components/Company/companies";
function App() {
  return (
    <Fragment>
      <div className="App">
      <NavBar />
      <Header/>
      <Companies/>
      </div>
    </Fragment>
  );
}

export default App;
