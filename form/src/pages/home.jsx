import React, { useState } from 'react';
import Hello from '../components/hello';
import Form from '../components/form-value';
import FormValues from '../components/form-values';
import Login from '../components/login';

const Home = () => {
    //handle state
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value1Name, setValue1Name] = useState('aName');
    const [value1Label, setValue1Label] = useState('aLable: ');
    const [value2, setValue2] = useState('');
    const [value2Name, setValue2Name] = useState('bName');
    const [value2Label, setValue2Label] = useState('bLable: ');

    const handleSubmit = () => {
        event.preventDefault();
	console.log('value: '+value);
	console.log('value1: '+value1);
	console.log('value2: '+value2);
    };

    const handleChange = (e) => {
        console.log('event.target.id: '+event.target.id);
        console.log('event.target.type: '+event.target.type);
        console.log('event.target.className: '+event.target.className);
        console.log('event.target.tagName: '+event.target.tagName);
        console.log('event.target.name: '+event.target.name);
        console.log('event.target.value: '+event.target.value);
	switch(event.target.name) {
	case value1Name:
	    setValue1(event.target.value);
	    break;
	case value2Name:
	    setValue2(event.target.value);
	    break;
	case 'value':
	    setValue(event.target.value);
	    break;
	};
    };

    const form = (
        <Form
            value={value}
            valueName='Value'
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );

    const formValues = (
        <FormValues
            value1={value1}
            value1Name={value1Name}
            value1Label={value1Label}
            value2={value2}
            value2Name={value2Name}
            value2Label={value2Label}
            onSubmit={handleSubmit}
            onChange={handleChange}
        />
    );

    return (
	<>
	    <h1>Home</h1>
	    <h2>(React.js Lambda Function Component)</h2>
	    <Hello msg="Hello World!" />
	    <h3>Form</h3>
            {form}
	    <h3>Login</h3>
	    <Login/>
	    <h3>Form with values</h3>
            {formValues}
	</>
    );
}

export default Home
