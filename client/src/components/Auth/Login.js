import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authActions';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // New: Error message state
    const [loading, setLoading] = useState(false); // New: Loading state for feedback
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when starting the request
        setErrorMessage(''); // Clear any previous error message

        try {
            // Call the login action, assuming it handles API call internally
            const result = await dispatch(login({ email, password }));

            if (result.error) {
                // Handle any error returned by the action
                setErrorMessage(result.error.message || 'Failed to login. Please try again.');
            } else {
                console.log('Login successful');
            }
        } catch (error) {
            // Catch any error and set error message
            setErrorMessage('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
