import React, { useState } from 'react'

function RegistrationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const [errorMessage, setError] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        let errorOb = {};

        if (!name) { errorOb = { ...errorOb, name: "Name is required" } };
        if (!email) { errorOb = { ...errorOb, email: "Email is required" } };
        if (!password) { errorOb = { ...errorOb, password: "Password is required" } };
        setError(errorOb);

        if (!Object.keys(errorOb).length) {
            setName('')
            setEmail('')
            setPassword('')
            alert("form submitted");
        } else {
            console.log(errorOb)
        }
    }
    const clearError = (field) => {
        setError((prevError) => ({ ...prevError, [field]: '' }));
    }

    return (
        <div>
            <h1>Form Registration</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        clearError('name');
                    }}
                    placeholder='Enter your name'
                />
                {errorMessage.name ? (<p style={{ color: 'red' }}>{errorMessage.name}</p>) : ('')}

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
