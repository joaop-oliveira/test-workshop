import React from "react";
import { Router, Link } from "@reach/router";
import { ButtonPage } from "./Pages/ButtonPage";
import logo from "./logo.svg";
import "./App.css";

function Main(props: any): React.ReactElement {
  return (
    <>
      <h2>Test Workshop</h2>
      <Link to="/button">Start Workshop</Link>
    </>
  );
}

const App: React.FC = () => {
  return (
    <div className="container mt-5">
      <Router>
        <Main path="/" />
        <ButtonPage path="/button" />
      </Router>
    </div>
  );
};

export default App;
