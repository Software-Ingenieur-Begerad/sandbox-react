import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './app';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
//TODO remove debugging
if (process.env.NODE_ENV !== 'production') {
    console.log('development mode');
}
//since react 18
import { createRoot } from 'react-dom/client';
//create root container
const root = createRoot(document.getElementById("root"));
//render root app
root.render(
    <React.StrictMode>
	<BrowserRouter>
	    <Auth0ProviderWithHistory>
		<App />
	    </Auth0ProviderWithHistory>
	</BrowserRouter>
    </React.StrictMode>
);
