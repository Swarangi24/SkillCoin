import React from 'react';

const RequestSkillPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Request Skills</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for skills..."
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Web Development</h2>
                    <p className="text-sm text-gray-600">Category: Technology</p>
                    <p className="my-2">I can help with building responsive websites using modern technologies.</p>
                    <button className="bg-primary text-white px-3 py-1 rounded text-sm">Request</button>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Graphic Design</h2>
                    <p className="text-sm text-gray-600">Category: Design</p>
                    <p className="my-2">Logo design, branding, and illustrations for your projects.</p>
                    <button className="bg-primary text-white px-3 py-1 rounded text-sm">Request</button>
                </div>
            </div>
        </div>
    );
};

export default RequestSkillPage;