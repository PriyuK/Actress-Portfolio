import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const links = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#work' },
        { name: 'Showreel', href: '#showreel' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className="navbar-container"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
            <div className="logo">RP.</div>

            <ul className="nav-links">
                {links.map((link) => (
                    <li key={link.name} className="nav-item">
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
