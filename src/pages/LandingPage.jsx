import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="container mx-auto px-4 py-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Exchange Skills.</span>
                            <br />Earn <span className="text-yellow-500">SkillCoins.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                            Join thousands of people exchanging skills and earning SkillCoins in our trusted community marketplace.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/dashboard" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg">
                                Get Started Now
                            </Link>
                            <Link to="/dashboard#how-it-works" className="bg-white text-blue-600 border border-blue-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all">
                                Learn How It Works
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                        <img
                            src="https://img.freepik.com/free-vector/people-exchanging-skills-goods_52683-36837.jpg"
                            alt="Skill Exchange"
                            className="max-w-lg rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How SkillCoin Works</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our platform makes it easy to exchange skills with others and earn SkillCoins for your time and expertise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3">1. Create Your Profile</h3>
                            <p className="text-gray-600 text-center">List the skills you can offer and what you're looking to learn from others.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3">2. Connect & Exchange</h3>
                            <p className="text-gray-600 text-center">Find matches based on complementary skills and arrange skill exchange sessions.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-3">3. Earn SkillCoins</h3>
                            <p className="text-gray-600 text-center">Get rewarded with SkillCoins for sharing your expertise, which you can use to learn new skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">What Our Community Says</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join thousands of satisfied members exchanging skills and growing together.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl relative">
                            <div className="absolute -top-5 left-8">
                                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4 36C11.0667 36 9.0667 35.2 7.4 33.6C5.8 32 5 30 5 27.6C5 25.0667 5.73333 22.6667 7.2 20.4C8.66667 18.1333 10.5333 16.2667 12.8 14.8L19.4 10.8L17.8 8.4C15.5333 9.33333 13.2667 10.8667 11 13C8.73333 15.0667 7.2 17.4 6.4 20H0.2C0.733333 15.4667 2.46667 11.4 5.4 7.8C8.33333 4.2 12.2667 1.53333 17.2 0H17.8L20.6 4.4L13.4 9.2C10.7333 10.8 8.73333 12.4667 7.4 14.2C6.06667 15.9333 5.4 17.8 5.4 19.8C7.8 19.8 9.73333 20.6 11.2 22.2C12.6667 23.8 13.4 25.6667 13.4 27.8V36ZM38.2 36C35.8667 36 33.8667 35.2 32.2 33.6C30.6 32 29.8 30 29.8 27.6C29.8 25.0667 30.5333 22.6667 32 20.4C33.4667 18.1333 35.3333 16.2667 37.6 14.8L44.2 10.8L42.6 8.4C40.3333 9.33333 38.0667 10.8667 35.8 13C33.5333 15.0667 32 17.4 31.2 20H25C25.5333 15.4667 27.2667 11.4 30.2 7.8C33.1333 4.2 37.0667 1.53333 42 0H42.6L45.4 4.4L38.2 9.2C35.5333 10.8 33.5333 12.4667 32.2 14.2C30.8667 15.9333 30.2 17.8 30.2 19.8C32.6 19.8 34.5333 20.6 36 22.2C37.4667 23.8 38.2 25.6667 38.2 27.8V36Z" fill="#3B82F6"/>
                                </svg>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-700 mb-6">SkillCoin completely changed how I develop my skills. I've taught Spanish to 5 people and learned web development in return!</p>
                                <div className="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Testimonial" className="w-12 h-12 rounded-full" />
                                    <div className="ml-3">
                                        <h4 className="font-bold">Maria Rodriguez</h4>
                                        <p className="text-gray-600 text-sm">Language Teacher</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 p-8 rounded-xl relative">
                            <div className="absolute -top-5 left-8">
                                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4 36C11.0667 36 9.0667 35.2 7.4 33.6C5.8 32 5 30 5 27.6C5 25.0667 5.73333 22.6667 7.2 20.4C8.66667 18.1333 10.5333 16.2667 12.8 14.8L19.4 10.8L17.8 8.4C15.5333 9.33333 13.2667 10.8667 11 13C8.73333 15.0667 7.2 17.4 6.4 20H0.2C0.733333 15.4667 2.46667 11.4 5.4 7.8C8.33333 4.2 12.2667 1.53333 17.2 0H17.8L20.6 4.4L13.4 9.2C10.7333 10.8 8.73333 12.4667 7.4 14.2C6.06667 15.9333 5.4 17.8 5.4 19.8C7.8 19.8 9.73333 20.6 11.2 22.2C12.6667 23.8 13.4 25.6667 13.4 27.8V36ZM38.2 36C35.8667 36 33.8667 35.2 32.2 33.6C30.6 32 29.8 30 29.8 27.6C29.8 25.0667 30.5333 22.6667 32 20.4C33.4667 18.1333 35.3333 16.2667 37.6 14.8L44.2 10.8L42.6 8.4C40.3333 9.33333 38.0667 10.8667 35.8 13C33.5333 15.0667 32 17.4 31.2 20H25C25.5333 15.4667 27.2667 11.4 30.2 7.8C33.1333 4.2 37.0667 1.53333 42 0H42.6L45.4 4.4L38.2 9.2C35.5333 10.8 33.5333 12.4667 32.2 14.2C30.8667 15.9333 30.2 17.8 30.2 19.8C32.6 19.8 34.5333 20.6 36 22.2C37.4667 23.8 38.2 25.6667 38.2 27.8V36Z" fill="#8B5CF6"/>
                                </svg>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-700 mb-6">Being a self-taught designer, I struggled to improve my skills. Through SkillCoin, I found mentors who helped me level up professionally.</p>
                                <div className="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Testimonial" className="w-12 h-12 rounded-full" />
                                    <div className="ml-3">
                                        <h4 className="font-bold">James Wilson</h4>
                                        <p className="text-gray-600 text-sm">UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-8 rounded-xl relative">
                            <div className="absolute -top-5 left-8">
                                <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4 36C11.0667 36 9.0667 35.2 7.4 33.6C5.8 32 5 30 5 27.6C5 25.0667 5.73333 22.6667 7.2 20.4C8.66667 18.1333 10.5333 16.2667 12.8 14.8L19.4 10.8L17.8 8.4C15.5333 9.33333 13.2667 10.8667 11 13C8.73333 15.0667 7.2 17.4 6.4 20H0.2C0.733333 15.4667 2.46667 11.4 5.4 7.8C8.33333 4.2 12.2667 1.53333 17.2 0H17.8L20.6 4.4L13.4 9.2C10.7333 10.8 8.73333 12.4667 7.4 14.2C6.06667 15.9333 5.4 17.8 5.4 19.8C7.8 19.8 9.73333 20.6 11.2 22.2C12.6667 23.8 13.4 25.6667 13.4 27.8V36ZM38.2 36C35.8667 36 33.8667 35.2 32.2 33.6C30.6 32 29.8 30 29.8 27.6C29.8 25.0667 30.5333 22.6667 32 20.4C33.4667 18.1333 35.3333 16.2667 37.6 14.8L44.2 10.8L42.6 8.4C40.3333 9.33333 38.0667 10.8667 35.8 13C33.5333 15.0667 32 17.4 31.2 20H25C25.5333 15.4667 27.2667 11.4 30.2 7.8C33.1333 4.2 37.0667 1.53333 42 0H42.6L45.4 4.4L38.2 9.2C35.5333 10.8 33.5333 12.4667 32.2 14.2C30.8667 15.9333 30.2 17.8 30.2 19.8C32.6 19.8 34.5333 20.6 36 22.2C37.4667 23.8 38.2 25.6667 38.2 27.8V36Z" fill="#10B981"/>
                                </svg>
                            </div>
                            <div className="pt-6">
                                <p className="text-gray-700 mb-6">After retiring, I wanted to share my accounting knowledge while learning new skills. SkillCoin made it easy to connect with people who value my experience.</p>
                                <div className="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Testimonial" className="w-12 h-12 rounded-full" />
                                    <div className="ml-3">
                                        <h4 className="font-bold">Susan Thompson</h4>
                                        <p className="text-gray-600 text-sm">Retired Accountant</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to start exchanging skills?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community today and start building your skill portfolio while earning SkillCoins.</p>
                    <Link to="/dashboard" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg inline-block">
                        Enter Dashboard
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LandingPage;