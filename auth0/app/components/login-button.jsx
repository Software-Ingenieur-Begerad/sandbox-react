import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function LoginButton(props) {
    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <button 
                onClick={()=>loginWithRedirect()} 
                className="loginButton"
                >
                Login
                </button>
        </div>
    )
}

export default LoginButton;
