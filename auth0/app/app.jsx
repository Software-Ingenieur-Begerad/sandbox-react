import React from 'react';
import Home from './pages/home';
import LoginButton from './components/login-button';
import LogoutButton from './components/logout-button';
export default function App() {
    return (
	<>
	    <div>
		<h1>Auth0 with React.js</h1>
		<Home />
	    </div>
	    <div>
		<LoginButton />
	    </div>
	    <div>
		<LogoutButton />
	    </div>
	</>
    );
}
