import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Auth0Provider } from "@auth0/auth0-react";
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
    <Auth0Provider
	domain="swingbe.eu.auth0.com"
	clientId="0DZCL8TWnttm6zYbxmU675EmATaIEDfn"
	redirectUri={window.location.origin}
    >
    <Auth0Provider>
	<React.StrictMode>
	    <App />
	</React.StrictMode>
    </Auth0Provider>
);
