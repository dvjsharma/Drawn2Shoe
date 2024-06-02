import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const GoToTop = () => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                document.getElementById('go-to-top-btn').style.display = 'block';
            } else {
                document.getElementById('go-to-top-btn').style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            id="go-to-top-btn"
            style={{ 
                display: 'none', 
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                zIndex: '1000', 
                backgroundColor: 'black', 
                color: 'white', 
                border: 'none', 
                borderRadius: '20%', 
                padding: '15px', 
                cursor: 'pointer', 
                boxShadow: '1px 3px 13px rgba(0, 0, 0, 0.2)'
            }}
            onClick={scrollToTop}
        >
        <FontAwesomeIcon icon={faArrowUp} />
        </button>
    );
};

export default GoToTop;
