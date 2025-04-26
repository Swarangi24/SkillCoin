import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
    const { currentUser } = useAuth();
    const [name, setName] = useState(currentUser?.name || '');
    const [bio, setBio] = useState(currentUser?.bio || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, bio });
        // Update profile logic here
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
            <div className="bg-white p-6 rounded shadow max-w-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            value={currentUser?.email || ''}
                            className="w-full p-2 border rounded bg-gray-100"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Bio</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="w-full p-2 border rounded h-32"
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;