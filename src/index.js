import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

class MyApp extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.querySelector("#root"));
