import { useRouter } from 'next/router';
import React, { useState } from 'react';

function Dashboard() {
    const navigate = useRouter()
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) {
            setError('Please enter a city name');
            return;
        }
        navigate.push("/city/" + city.toLowerCase())
    };

    return (
        <div className="container w-100">
            <div className="search-box">
                <h1>Find Your City</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter city name..."
                            value={city}
                            onChange={(e) => {
                                setCity(e.target.value);
                                setError('');
                            }}
                            className={error ? 'error' : ''}
                        />
                        {error && <span className="error-message">{error}</span>}
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Dashboard;