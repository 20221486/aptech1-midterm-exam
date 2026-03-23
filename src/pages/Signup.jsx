import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const validName = (name) => {
    const nameRegex = /^[A-Za-z].{2,}$/;
  };

  const validUsername = (username) => {
    const usernameRegex = /^[A-Za-z0-9._-]+$/;
  };

  const validPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  };

  const validEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  };

  const { 
    register, 
    handleSubmit: onSubmitForm, 
    formState: { errors }, } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/Success');
  };

  return (
    <div className='formContainer'>
      <h1>Signup Form</h1>
      <form onSubmit={onSubmitForm(onSubmit)}>
        <div className='nameForm'>
          <label>Name: </label>
          <input
                type="text"
                {...register("name", { required: 'Name is required', maxLength: 30, validate: validName })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        
        <div className='usernameForm'>
          <label>Username: </label>
          <input 
                type="text" 
                {...register('username', { required: 'Username is required', validate: validUsername })}
          />
          {errors.username && <span className="error">{errors.username.message}</span>}
        </div>

        <div className='passwordForm'>
          <label>Password: </label>
          <input 
                type="password" 
                {...register('password', { required: 'Password is required', validate: validPassword })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className='emailForm'>
          <label>Email: </label>
          <input 
                type="email"
                {...register('email', { required: 'Email is required', validate: validEmail })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <br /><input type="submit" value="Submit" />
        
      </form>
    </div>
  );
};

export default Signup;
