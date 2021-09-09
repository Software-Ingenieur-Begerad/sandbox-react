import React from "react";
import ReactDOM from "react-dom";
/*
 *component Welcome
 */
class Welcome extends React.Component {
  render() {
      return <h1>react-config-tutorial</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
