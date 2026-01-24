import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import img1 from '../../assets/images/gallery-headshot.png';
import img2 from '../../assets/images/gallery-casual.PNG';
import img3 from '../../assets/images/gallery-kali.png';
import img4 from '../../assets/images/gallery-dance.JPG';
import img5 from '../../assets/images/gallery-period.jpg';
import img6 from '../../assets/images/gallery-regional.png';
import img7 from '../../assets/images/gallery-festive.PNG';
import img8 from '../../assets/images/gallery-bold.jpeg';

const images = [
    { id: 1, src: img1, alt: "Professional Headshot" },
    { id: 7, src: img7, alt: "Festive Look" },
    { id: 3, src: img3, alt: "Kali Theatrical Look" },
    { id: 5, src: img5, alt: "Cinematic/Period" },
    { id: 4, src: img4, alt: "Traditional Dance" },
    { id: 2, src: img2, alt: "Casual Blue Dress" },
    { id: 6, src: img6, alt: "Regional Character" },
    { id: 8, src: img8, alt: "Bold Look" },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="gallery-section">
            <div className="gallery-container">
                <h2 className="gallery-title">The Look</h2>

                <div className="gallery-grid">
                    {images.map((img) => (
                        <motion.div
                            key={img.id}
                            layoutId={`img-container-${img.id}`}
                            className="gallery-item"
                            onClick={() => setSelectedId(img.id)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={img.src}
                                alt={img.alt}
                                layoutId={`img-${img.id}`}
                                className="gallery-img"
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                <button className="lightbox-close" onClick={() => setSelectedId(null)}>&times;</button>
                                {/* Find the selected image object */}
                                {(() => {
                                    const img = images.find(i => i.id === selectedId);
                                    return (
                                        <motion.img
                                            src={img.src}
                                            alt={img.alt}
                                            layoutId={`img-${img.id}`}
                                            className="lightbox-img"
                                        />
                                    );
                                })()}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
