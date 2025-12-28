import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';
import resumePdf from '../../assets/documents/resume.pdf';

const creditsData = {
    Film: [
        { year: '2024', role: 'Elena (Lead)', production: 'The Glass House', director: 'Sarah Jenkins' },
        { year: '2023', role: 'Supporting', production: 'Midnight Train', director: 'Christopher Nolan' },
        { year: '2022', role: 'Sarah', production: 'Echoes of Summer', director: 'Indie Feature' },
    ],
    Television: [
        { year: '2023', role: 'Guest Star', production: 'Law & Order: SVU', director: 'NBC' },
        { year: '2022', role: 'Recurring', production: 'The Crown', director: 'Netflix' },
    ],
    Theatre: [
        { year: '2022', role: 'Juliet', production: 'Romeo & Juliet', director: 'Royal Theatre' },
        { year: '2021', role: 'Nina', production: 'The Seagull', director: 'Off-Broadway' },
    ]
};

const Work = () => {
    const [activeTab, setActiveTab] = useState('Film');

    return (
        <section id="work" className="work-section">
            <div className="work-container">

                <div className="work-header">
                    <h2 className="work-title">Selected Credits</h2>

                    <div className="work-tabs">
                        {Object.keys(creditsData).map((category) => (
                            <button
                                key={category}
                                className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <a href={resumePdf} download="Rekha_Patel_Resume.pdf" className="download-cv-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </div>

                <div className="credits-list">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <table className="credits-table">
                                <tbody>
                                    {creditsData[activeTab].map((credit, index) => (
                                        <tr key={index} className="credit-row">
                                            <td className="credit-cell col-year">{credit.year}</td>
                                            <td className="credit-cell col-role">{credit.role}</td>
                                            <td className="credit-cell col-production">{credit.production}</td>
                                            <td className="credit-cell col-director">{credit.director}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default Work;
