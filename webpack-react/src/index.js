import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
//TODO remove debugging
if (process.env.NODE_ENV !== 'production') {
    console.log('development mode!');
}
//since react 18
import { createRoot } from 'react-dom/client';
//create root container
const root = createRoot(document.getElementById("root"));
//render root app
root.render(<Home />);
