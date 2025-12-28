import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">

                <motion.h2
                    className="contact-headline"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Ready to tell the next story?
                </motion.h2>

                <motion.p
                    className="contact-cta"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    For bookings, auditions, and collaborations, please reach out directly or contact my representation.
                </motion.p>

                <motion.a
                    href="mailto:rekhavkspatel22@gmail.com"
                    className="email-link"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    rekhavkspatel22@gmail.com
                </motion.a>

                <div className="social-links">
                    <a href="https://www.instagram.com/rekha_official22" target="_blank" rel="noopener noreferrer" className="social-item">Instagram</a>
                    <a href="https://www.youtube.com/@RekhaRanians" target="_blank" rel="noopener noreferrer" className="social-item">YouTube</a>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} SilvyOS. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Contact;
