import React from 'react';

const WalletPage = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Wallet</h1>
            <div className="bg-white p-6 rounded shadow mb-6">
                <h2 className="text-xl font-bold">Balance: 250 SkillCoins</h2>
                <div className="mt-4">
                    <button className="bg-primary text-white px-4 py-2 rounded mr-2">Send</button>
                    <button className="bg-secondary text-white px-4 py-2 rounded">Request</button>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-2">Transaction History</h2>
            <div className="bg-white rounded shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Description</th>
                        <th className="p-3 text-left">Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="border-t">
                        <td className="p-3">2023-04-15</td>
                        <td className="p-3">Received for Web Development</td>
                        <td className="p-3 text-green-600">+50 SC</td>
                    </tr>
                    <tr className="border-t">
                        <td className="p-3">2023-04-10</td>
                        <td className="p-3">Paid for Graphic Design</td>
                        <td className="p-3 text-red-600">-30 SC</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WalletPage;