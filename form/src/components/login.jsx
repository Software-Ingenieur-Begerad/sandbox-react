import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    handleOnChange = event => {
        console.log('event.target.id: '+event.target.id);
        console.log('event.target.type: '+event.target.type);
        console.log('event.target.className: '+event.target.className);
        console.log('event.target.tagName: '+event.target.tagName);
        console.log('event.target.name: '+event.target.name);
        console.log('event.target.value: '+event.target.value);
	console.log('event.target: '+event.target);
	this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <form>
                <label>Email</label>
                <input type="text" name="email" onChange={this.handleOnChange} />
		<br/>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleOnChange} />
            </form>
        );
    }
}
