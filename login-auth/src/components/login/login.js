import React, { useState } from 'react';
import PropTypes from 'prop-types';

//NOTE: All async fcts return Promises!
async function loginUser (credentials) {
    console.log('from loginUser() credentials: ', credentials);

    const port = 4242;
    console.log('from loginUser() port: ', port);

    try {
    //NOTE: You can only await for a fct that returns a Promise!
        let rsp = await fetch('http://localhost:' + port + '/login', {
            method: 'POST',
            headers: {
                ContentType: 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        let data = await rsp.json();
        console.log('from loginUser() data: ', data);

        return data;
    } catch (err) {
        console.log('from loginUser() err.message: ', err.message);
    }
}

//destructure the props object to pull out the setToken prop
function Login ({ setToken }) {
    //local state to capture user email and key
    const [email, setEmail] = useState('');
    const [key, setKey] = useState('');

    //create form submit handler
    const handleSubmit = async (e) => {
        console.log('from handleSubmit() started...');

        //TODO What the heck?
        e.preventDefault();

        const token = await loginUser({
            email,
            key
        });
        console.log('from handleSubmit() token: ', token);

        setToken(token);
    };

    return (
        <div>
            <h1>Please Log In</h1>
            {
                //call handleSubmit using the onSubmit event handler of form
            }
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    {
                        //make the inputs uncontrolled components
                    }
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Key</p>
                    <input type="password" onChange={(e) => setKey(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;
