import React, { useState } from 'react';

const OfferSkillPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, category });
        // Submit form logic here
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Offer a New Skill</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg">
                <div className="mb-4">
                    <label className="block mb-1">Skill Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="technology">Technology</option>
                        <option value="design">Design</option>
                        <option value="writing">Writing</option>
                        <option value="education">Education</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded h-32"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Submit Skill</button>
            </form>
        </div>
    );
};

export default OfferSkillPage;