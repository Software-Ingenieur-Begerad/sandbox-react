import React from 'react';

import NavBar from "./components/nav-bar";
import Home from './pages/home';
export default function App() {
    return (
	<div id="app" className="d-flex flex-column h-100">
	    <NavBar />
	    <div>
		<h1>Auth0 with React.js</h1>
		<Home />
	    </div>
	</div>
    );
}
