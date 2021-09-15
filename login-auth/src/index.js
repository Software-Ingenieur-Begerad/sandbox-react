import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import App from './components/app/app';

//NOTE: a router component like BrowserRouter can only habe one child element
ReactDOM.render(<App />, document.getElementById('root'));
