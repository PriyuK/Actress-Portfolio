import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Work.css';
import resumePdf from '../../assets/documents/resume.pdf';

const creditsData = {
    Pageantry: [
        { year: '2025', role: 'Miss Starface Popular', production: 'Starface of India', director: 'National Pageant' },
        { year: '2023', role: 'Title Winner', production: 'Miss Chhattisgarh 2023', director: 'State Pageant' },
    ],
    Film: [
        { year: '-', role: 'Junior Artist', production: 'Kisko Tha Pata (Hindi Feature)', director: '-' },
        { year: '-', role: 'Lead Role', production: 'Short Film (Intl. Festival Selection)', director: 'Screen' },
        { year: '-', role: 'Lead Actress', production: '3-4 Music Album Videos', director: 'YouTube Releases' },
    ],
    Theatre: [
        { year: '-', role: 'Shobha (Negative Lead)', production: 'Faisla (Bilaspur)', director: '-' },
        { year: '-', role: 'Supportive Friend', production: 'Bade Bhai Sahab (Nagpur)', director: '-' },
        { year: '2023', role: 'Student', production: '7-Month Theatre Training Course', director: '-' },
    ],
    Modeling: [
        { year: '2023+', role: 'Runway Model', production: '20+ Local Fashion Shows', director: 'Chhattisgarh' },
    ]
};

const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="work-container">

                <div className="work-header">
                    <h2 className="work-title">Selected Credits</h2>
                    <a href={resumePdf} download="Rekha_Patel_Resume.pdf" className="download-cv-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </div>

                <div className="work-content">
                    {Object.entries(creditsData).map(([category, items], catIndex) => (
                        <div key={category} className="category-section">
                            <motion.h3
                                className="category-header"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                {category}
                            </motion.h3>

                            <div className="credits-simple-list">
                                {items.map((credit, index) => (
                                    <motion.div
                                        key={index}
                                        className="credit-item"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05, duration: 0.4 }}
                                    >
                                        <div className="credit-year">
                                            {credit.year !== '-' ? credit.year : ''}
                                        </div>

                                        <div className="credit-info">
                                            <h4 className="credit-role">{credit.role}</h4>
                                            <div className="credit-details">
                                                <span className="credit-production">{credit.production}</span>
                                                {credit.director && credit.director !== '-' && (
                                                    <span className="credit-director"> • {credit.director}</span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;
