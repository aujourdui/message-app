import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
