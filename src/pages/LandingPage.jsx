import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to SkillCoin</h1>
            <p className="mb-6">Exchange skills with confidence in our trusted community marketplace.</p>
            <div className="flex gap-4">
                <Link to="/login" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">Login</Link>
                <Link to="/register" className="bg-secondary text-white px-4 py-2 rounded hover:bg-green-700">Register</Link>
            </div>
        </div>
    );
};

export default LandingPage;