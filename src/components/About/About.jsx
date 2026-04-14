import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import aboutImg from '../../assets/images/about-modern.JPG';

const About = () => {
    // Placeholder data - easy to swap out later
    const stats = [
        { label: 'Height', value: "5'2\"" },
        { label: 'Eyes', value: 'Dark Brown' },
        { label: 'Hair', value: 'Black' },
        { label: 'Age', value: '22' }, // Adjusted slightly based on youthful look
        { label: 'Location', value: 'Taloja, Navi Mumbai' },
        { label: 'Languages', value: 'English, Hindi, Chhattisgarhi' },
    ];

    /* Animation variants for staggering items */
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="about" className="about-section">
            <div className="about-container">

                {/* Left Content */}
                <motion.div
                    className="about-content"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span variants={itemVariants} className="section-label">
                        Introduction
                    </motion.span>

                    <motion.h2 variants={itemVariants} className="about-title">
                        More than just lines <br /> on a script.
                    </motion.h2>

                    <motion.p variants={itemVariants} className="about-bio">
                        Acting isn't about pretending; it's about finding the truth in imaginary circumstances.
                        I am an artist driven by raw emotion and the complex human experience.
                        Every role is a new life, a new soul to inhabit, and a new story to tell with
                        unwavering authenticity.
                    </motion.p>

                    <motion.div variants={itemVariants} className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-value">{stat.value}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="bg-text">ARTIST</div>
                    {/* Editorial / Candid Vibe Image */}
                    <img
                        src={aboutImg}
                        alt="Rekha Patel Editorial Shot"
                        className="about-image"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default About;
