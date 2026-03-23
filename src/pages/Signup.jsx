import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validName = (name) => {
        const nameRegex = /^[A-Za-z] {2,}$/;
        return nameRegex.test(name);
    }

    const validUsername = (username) => {
        const usernameRegex = /^[A-Za-z0-9._-]+$/;
        return usernameRegex.test(username);
    };

    const validPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
        return passwordRegex.test(password);
    }

    const validEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!validName(name)) {
            newErrors.name = 'Invalid name';
        }
        if (!validUsername(username)) {
            newErrors.username = 'Invalid username';
        }
        if (!validPassword(password)) {
            newErrors.password = 'Invalid password';
        }
        if (!validEmail(email)) {
            newErrors.email = 'Invalid email';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Submitted:', { name, username, email });
        }
    };

    return (
        <div>
            <h1>Signup Form</h1>
                <form onSubmit={onSubmitForm}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={onChangeName}></input> <br></br>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={onChangeUsername}></input> <br></br>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={onChangePassword}></input> <br></br>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={onChangeEmail}></input>
                    <br /><button type="submit">Submit</button>
                </form>
        </div>
    );
};

export default Signup;