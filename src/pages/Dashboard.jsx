import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { currentUser } = useAuth();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-4">Welcome back, {currentUser?.name || 'User'}!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold mb-2">Your Stats</h2>
                    <p>Skills offered: 3</p>
                    <p>Trust score: 85/100</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold mb-2">Recent Activity</h2>
                    <p>No recent activity</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;