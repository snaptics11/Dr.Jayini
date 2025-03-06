import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicePageTabs = () => {
    const [activeTab, setActiveTab] = useState('Knee Care');
    const data = [
        {
            image: '/assets/images/peducation1.jpg',
            title: 'Exercises after a Total Knee Replacement',
            content: 'Effective exercises to aid recovery post knee replacement surgery.',
            category: 'Knee Care'
        },
        {
            image: '/assets/images/peducation2.jpeg',
            title: 'Managing Arthritis Pain',
            content: 'Lifestyle tips to ease arthritis discomfort.',
            category: 'Knee Care'
        },
        {
            image: '/assets/images/peducation3.jpg',
            title: 'Sports Injury Rehabilitation',
            content: 'Speed up your recovery with these tailored exercises.',
            category: 'Knee Care'
        },
        {
            image: '/assets/images/peducation4.jpg',
            title: 'Post-Operative Care for Hip Replacement',
            content: 'Essential steps for a smooth hip surgery recovery.',
            category: 'Hip & Back'
        },
        {
            image: '/assets/images/peducation5.jpg',
            title: 'Back Pain Relief Exercises',
            content: 'Simple exercises to alleviate chronic back pain.',
            category: 'Hip & Back'
        },
        {
            image: '/assets/images/peducation6.jpeg',
            title: 'Managing Arthritis Pain',
            content: 'Effective exercises and lifestyle tips to manage arthritis pain.',
            category: 'Hip & Back'
        },
        {
            image: '/assets/images/peducation7.jpg',
            title: 'Shoulder Mobility Exercises',
            content: 'Improve shoulder movement with targeted exercises.',
            category: 'Shoulder & Elbow'
        },
        {
            image: '/assets/images/peducation8.jpeg',
            title: 'Preventing Osteoporosis',
            content: 'Strengthen your bones with preventive exercises.',
            category: 'Shoulder & Elbow'
        },
        {
            image: '/assets/images/peducation9.jpg',
            title: 'Posture Correction Tips',
            content: 'Maintain a healthy posture with easy-to-follow routines.',
            category: 'Shoulder & Elbow'
        },
        {
            image: '/assets/images/peducation10.webp',
            title: 'ACL Injury Prevention',
            content: 'Prevent ACL injuries with these effective strengthening exercises.',
            category: 'Foot & Ankle'
        },
        {
            image: '/assets/images/peducation11.jpg',
            title: 'Elbow Pain Relief',
            content: 'Exercises to relieve elbow pain and improve mobility.',
            category: 'Shoulder & Elbow'
        },
        {
            image: '/assets/images/peducation12.jpg',
            title: 'Foot and Ankle Exercises',
            content: 'Maintain foot and ankle health with these simple exercises.',
            category: 'Foot & Ankle'
        },
        {
            image: '/assets/images/peducation13.jpg',
            title: 'Ankle Strengthening Exercises',
            content: 'Boost ankle stability and prevent injuries with these strengthening exercises.',
            category: 'Foot & Ankle'
        }
    ];
    


    const categories = [...new Set(data.map(item => item.category))];

    return (
        <div className="education-main-parent">
            <div className="education-sub-parent">
                <div className="container-lg">
                    <div className="col-md-12 col-lg-10 mx-auto">
                        <ul className="nav nav-tabs justify-content-center mb-4 gap-2">
                            {categories.map((category, index) => (
                                <li key={index} className="nav-item">
                                    <button
                                        className={`nav-link ${activeTab === category ? 'active' : ''}`}
                                        onClick={() => setActiveTab(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <div className="row p-0 m-0">
                            {data
                                .filter(item => item.category === activeTab)
                                .slice(0, 3) 
                                .map((item, index) => (
                                    <div key={index} className="col-sm-6 col-md-4">
                                         <div className="education-card">
                                                <div className='education-image'>
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                                <div className='education-card-content'>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageTabs;
