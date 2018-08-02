import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }
    setUser(user) {
        this.setState({ user: user })
    }
    render() {
        return (
            <div className="Users">
                <ul>
                    <li onClick={() => this.setUser('user 1')}>user 1</li>
                    <li onClick={() => this.setUser('user 2')}>user 2</li>
                    <li onClick={() => this.setUser('user 3')}>user 3</li>
                </ul>
                { this.state.user}
          </div>
        );
    }
}

export default Users;
