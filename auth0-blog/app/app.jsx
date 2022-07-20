import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from "./components/nav-bar";
import Loading from "./components/loading";
import Home from './pages/home';
export default function App() {
    const { isLoading } = useAuth0();
    if (isLoading) {
	return <Loading />;
    }
    return (
	<div>
	    <NavBar />
	    <div>
		<h1>Auth0 with React.js</h1>
		<Home />
	    </div>
	</div>
    );
}
