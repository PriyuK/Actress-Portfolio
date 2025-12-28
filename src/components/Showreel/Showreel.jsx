import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Showreel.css';

const videos = [
    {
        id: 1,
        title: "Theatrical Reel 2024",
        duration: "02:15",
        // Using a sample MP4 link (legal free use or placeholder)
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        poster: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2958&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Comedic Monologue",
        duration: "01:30",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Commercial Work",
        duration: "00:45",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=2787&auto=format&fit=crop"
    }
];

const Showreel = () => {
    const [currentVideo, setCurrentVideo] = useState(videos[0]);

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
                                key={currentVideo.id}
                                className="main-video"
                                controls
                                poster={currentVideo.poster}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <source src={currentVideo.src} type="video/mp4" />
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
