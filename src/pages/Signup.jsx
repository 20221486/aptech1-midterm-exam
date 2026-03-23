import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

    const navigate = useNavigate();

    const SuccessNav = () => {
        navigate('/Success');
    }

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const validName = (name) => {
        const nameRegex = /^[A-Za-z].{2,}$/;
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
            newErrors.name = 'Invalid name, must be at least 3 characters and start with a letter';
        }
        if (!validUsername(username)) {
            newErrors.username = 'Invalid username, must be between 3 and 20 characters and contain only letters, numbers, dots, underscores, and hyphens';
        }
        if (!validPassword(password)) {
            newErrors.password = 'Invalid password, must be between 8 and 16 characters and contain at least one lowercase letter, one uppercase letter, one digit, and one special character';
        }
        if (!validEmail(email)) {
            newErrors.email = 'Invalid email, must be a valid email address';
        }
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log('Form submitted successfully');
            console.log('Name:', name);
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Email:', email);
        }
    };

    return (
        <div className='formContainer'>
            <h1>Signup Form</h1>
                <form onSubmit={onSubmitForm}>
                    <div className='nameForm'>
                        <label>Name: </label>
                        <input 
                            type="text"
                            value={name}
                            onChange={onChangeName}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className='usernameForm'>
                        <label>Username: </label>
                        <input 
                            type="text"
                            value={username}
                            onChange={onChangeUsername}
                        />
                        {errors.username && <span className="error">{errors.username}</span>}
                    </div>
                
                    <div className='passwordForm'>
                        <label>Password: </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>  
                    
                    <div className='emailForm'>
                        <label>Email: </label>
                        <input 
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <br /><button type="submit" onClick={SuccessNav}>Submit</button>
                </form>
        </div>
    );
};

export default Signup;