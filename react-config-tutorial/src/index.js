import React from 'react';
import ReactDOM from 'react-dom';
import "./style/main.less";

/*
 *component Welcome
 *using class syntax from ES6
 *Webpack needs Babel to process ES6 into ES5 syntaxes in order for this class to work
 */
class Welcome extends React.Component {
  render() {
    return <h1>react-config-tutorial</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
