import React from 'react';

const TrustScorePage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Trust Score</h1>
            <div className="bg-white p-6 rounded shadow mb-6">
                <div className="flex items-center mb-4">
                    <div className="text-3xl font-bold mr-4">85</div>
                    <div className="bg-gray-200 h-4 flex-grow rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <p className="text-gray-600">Your trust score is based on successful exchanges, feedback from other users, and your activity on the platform.</p>
            </div>
            <h2 className="text-xl font-bold mb-2">How to Improve Your Score</h2>
            <ul className="bg-white p-6 rounded shadow list-disc pl-6">
                <li className="mb-2">Complete more skill exchanges</li>
                <li className="mb-2">Receive positive feedback from other users</li>
                <li className="mb-2">Be active on the platform</li>
                <li className="mb-2">Verify your profile information</li>
            </ul>
        </div>
    );
};

export default TrustScorePage;