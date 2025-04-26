import React, { useState } from 'react';
import { FaCoins, FaChartLine, FaUserFriends, FaHandshake, FaBell } from 'react-icons/fa';

const Dashboard = () => {
    const [userName] = useState('Chetan Patil');
    const [notifications] = useState([
        { id: 1, message: 'Tom accepted your skill exchange offer', time: '2 hours ago' },
        { id: 2, message: 'You received 5 SkillCoins from Sarah', time: 'Yesterday' },
        { id: 3, message: 'New skill request in your area', time: '3 days ago' }
    ]);

    // Mock data for charts and stats
    const skillData = [
        { name: 'Coding', offered: 15, requested: 7 },
        { name: 'Design', offered: 8, requested: 12 },
        { name: 'Language', offered: 5, requested: 10 }
    ];

    return (
        <div className="p-4">
            {/* Header with greeting and profile summary */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl text-white">
                <div>
                    <h1 className="text-3xl font-bold">Welcome back, {userName}!</h1>
                    <p className="mt-2 opacity-90">Here's what's happening with your SkillCoin account today.</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                    <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Profile" 
                        className="h-16 w-16 rounded-full border-4 border-white"
                    />
                    <div className="ml-4">
                        <div className="text-white font-semibold">Your Balance</div>
                        <div className="flex items-center">
                            <FaCoins className="text-yellow-300 mr-2" />
                            <span className="text-2xl font-bold">247</span>
                            <span className="ml-2">SkillCoins</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">Trust Score</div>
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <FaChartLine className="text-blue-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold">85/100</div>
                        <div className="text-green-500 text-sm mt-1">↗ 7% from last month</div>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-4">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">Skills Offered</div>
                        <div className="bg-purple-100 p-2 rounded-lg">
                            <FaHandshake className="text-purple-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold">28</div>
                        <div className="text-purple-500 text-sm mt-1">↗ 12% from last month</div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-1">
                        {skillData.map((skill, index) => (
                            <div key={index} className="text-xs bg-purple-50 rounded p-1 text-center">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">Skills Requested</div>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <FaUserFriends className="text-green-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-green-500 text-sm mt-1">New matches: 3</div>
                    </div>
                    <button className="mt-4 bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-1 text-sm transition-colors duration-300">
                        View Matches
                    </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-semibold">Recent Transactions</div>
                        <div className="bg-yellow-100 p-2 rounded-lg">
                            <FaCoins className="text-yellow-500" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="text-3xl font-bold">+35</div>
                        <div className="text-yellow-500 text-sm mt-1">Last 7 days</div>
                    </div>
                    <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg px-3 py-1 text-sm transition-colors duration-300">
                        View Details
                    </button>
                </div>
            </div>

            {/* Activity and Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">Skill Exchange Activity</h2>
                        <select className="border rounded-md px-2 py-1 text-sm">
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full" alt="User" />
                            <div className="ml-3">
                                <div className="font-medium">Sarah Miller</div>
                                <div className="text-sm text-gray-600">Requested your Web Development skill</div>
                            </div>
                            <div className="ml-auto space-x-2">
                                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm">Accept</button>
                                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">Reject</button>
                            </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-green-50 rounded-lg">
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full" alt="User" />
                            <div className="ml-3">
                                <div className="font-medium">Robert Johnson</div>
                                <div className="text-sm text-gray-600">Completed Language Exchange (Spanish)</div>
                            </div>
                            <div className="ml-auto">
                                <span className="text-green-500 font-semibold">+15 SkillCoins</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                            <img src="https://randomuser.me/api/portraits/women/23.jpg" className="w-10 h-10 rounded-full" alt="User" />
                            <div className="ml-3">
                                <div className="font-medium">Emily Chen</div>
                                <div className="text-sm text-gray-600">Gave you a 5-star rating</div>
                            </div>
                            <div className="ml-auto">
                                <span className="text-purple-500 font-semibold">+5 Trust Score</span>
                            </div>
                        </div>
                    </div>
                    
                    <button className="w-full mt-4 text-blue-500 border border-blue-500 rounded-lg py-2 hover:bg-blue-50 transition-colors duration-300">
                        View All Activity
                    </button>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="flex items-center mb-6">
                        <h2 className="text-xl font-bold">Notifications</h2>
                        <div className="ml-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">{notifications.length}</div>
                        <button className="ml-auto text-sm text-blue-500">Mark all as read</button>
                    </div>
                    
                    <div className="divide-y">
                        {notifications.map(notification => (
                            <div key={notification.id} className="py-4 flex">
                                <div className="mr-4">
                                    <div className="bg-blue-100 p-2 rounded-full">
                                        <FaBell className="text-blue-500" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-medium">{notification.message}</p>
                                    <p className="text-sm text-gray-500">{notification.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="w-full mt-4 text-blue-500 border border-blue-500 rounded-lg py-2 hover:bg-blue-50 transition-colors duration-300">
                        View All Notifications
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;