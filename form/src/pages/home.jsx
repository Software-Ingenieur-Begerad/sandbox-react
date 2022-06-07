import React, { useState } from 'react';
import Hello from '../components/hello';
import Form from '../components/form-value';

const Home = () => {
    //handle state
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
	console.log('handleSubmit() todo');
    };

    const handleChange = (e) => {
	console.log('e.target.value: '+e.target.value);
	setValue(e.target.value);
    };

    const form = (
        <Form
            value={value}
            valueName='Value'
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );

    return (
	<>
	    <h1>Home</h1>
	    <h2>(React.js Lambda Function Component)</h2>
	    <Hello msg="Hello World!" />
            {form}
	</>
    );
}

export default Home
