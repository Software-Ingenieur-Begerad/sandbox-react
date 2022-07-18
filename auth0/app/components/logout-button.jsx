import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function LogoutButton(props) {
    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <button 
                onClick={()=>loginWithRedirect()} 
                className="loginButton"
                >
                Logout
                </button>
        </div>
    )
}

export default LogoutButton;
