import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithNavigate = ({ children }) => {
    const domain = 'swingbe.eu.auth0.com';
    const clientId = 'OySbj7SzpZeKxKGm8lGDNZW0pcGQBiJr';
    const navigate = useNavigate();
    const onRedirectCallback = (appState) => {
	navigate.push(appState?.returnTo || window.location.pathname);
    };
    return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
