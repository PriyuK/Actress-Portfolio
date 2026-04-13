import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Showreel.css';

const videos = [
    {
        id: 1,
        title: "Introduction",
        duration: "Main",
        src: "/introduction bhideo.MOV",
        poster: "" // You can add a poster image URL here later
    }
];

const Showreel = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const videoRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6 // Video plays when at least 60% of it is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(error => {
                            console.log("Autoplay was prevented:", error);
                        });
                    } else {
                        videoRef.current.pause();
                    }
                }
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [currentVideo]);

    return (
        <section id="showreel" className="showreel-section">
            <div className="showreel-container">

                <div className="showreel-header">
                    <h2 className="showreel-title">Showreel</h2>
                    <span className="showreel-subtitle">Latest Performance Clips</span>
                </div>

                <div className="player-layout">
                    {/* Main Player */}
                    <div className="main-player-wrapper">
                        <AnimatePresence mode='wait'>
                            <motion.video
                                ref={videoRef}
                                key={currentVideo.id}
                                className="main-video"
                                controls
                                poster={currentVideo.poster}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <source src={currentVideo.src} />
                                Your browser does not support the video tag.
                            </motion.video>
                        </AnimatePresence>
                    </div>

                    {/* Playlist Side */}
                    <div className="playlist-container">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className={`clip-item ${currentVideo.id === video.id ? 'active' : ''}`}
                                onClick={() => setCurrentVideo(video)}
                            >
                                <img src={video.poster} alt={video.title} className="clip-thumbnail" />
                                <div className="clip-info">
                                    <h4 className="clip-title">{video.title}</h4>
                                    <span className="clip-duration">{video.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showreel;
