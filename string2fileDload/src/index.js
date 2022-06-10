import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

//since react 18
import { createRoot } from 'react-dom/client';
//create root container
const root = createRoot(document.getElementById("root"));
//render root app
root.render(<Home />);
