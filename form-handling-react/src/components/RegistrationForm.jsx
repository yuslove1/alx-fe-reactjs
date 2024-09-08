import React, { useState } from 'react'

function RegistrationForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [errorMessage, setErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        let errorOb = {};

        if (!username) { errorOb = { ...errorOb, username: "Username is required" } };
        if (!email) { errorOb = { ...errorOb, email: "Email is required" } };
        if (!password) { errorOb = { ...errorOb, password: "Password is required" } };
        setErrors(errorOb);

        if (!Object.keys(errorOb).length) {
            setUsername('')
            setEmail('')
            setPassword('')
            alert("form submitted");
        } else {
            console.log(errorOb)
        }
    }
    const clearError = (field) => {
        setErrors((prevError) => ({ ...prevError, [field]: '' }));
    }

    return (
        <div>
            <h1>Form Registration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='username'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        clearError('username');
                    }}
                    placeholder='Enter your username'
                />
                {errorMessage.username ? (<p style={{ color: 'red' }}>{errorMessage.username}</p>) : ('')}

                <input
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        clearError('email');
                    }}
                    placeholder='Enter your email'
                />
                {errorMessage.email ? (<p style={{ color: 'red' }}>{errorMessage.email}</p>) : ('')}

                <input
                    type="password"
                    name='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        clearError('password');
                    }}
                    placeholder='Enter your password'
                />
                {errorMessage.password ? (<p style={{ color: 'red' }}>{errorMessage.password}</p>) : ('')}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm
