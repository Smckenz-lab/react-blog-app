import { useState } from 'react';
import {useNavigate} from 'react-router';
import { useAuth } from './AuthUser';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const {user, login} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            setError('You are already logged in. Please log out.');
            return;
        }

        if (!username.trim()|| !password.trim()) {
            setError('Please enter both Username and Password');
            return;
        }

        const successful = login(username, password);
        if(successful) {
            navigate('/');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
       <div className="login-container">
        <div className="login-card">
            <h2>Login to the Anime Post</h2>
            {error && <p className= "error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
   );
}