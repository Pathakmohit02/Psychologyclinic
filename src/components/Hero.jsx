    import React from 'react';
    import './Hero.css';

    const SocialIcons = () => {
    const icons = [
        { name: 'Facebook', url: 'https://www.facebook.com', iconSrc: '/fb.jpeg' },
        { name: 'WhatsApp', url: 'https://www.whatsapp.com', iconSrc: '/whatsapp2.jpeg' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', iconSrc: '/linkedin.png' },
        { name: 'Twitter', url: 'https://www.twitter.com', iconSrc: '/twitter.png' },
    ];

    return (
        <div className="social-icons">
        {icons.map(({ name, url, iconSrc }) => (
            <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="social-icon"
            >
            <img src={iconSrc} alt={`${name} icon`} style={{ width: '22px', height: '22px' }} />
            </a>
        ))}
        </div>
    );
    };

    const Hero = () => {
    return (
        <section id="home" className="hero-section">
        <div className="hero-overlay"></div>

        <div className="hero-content">
            
            
            <h1 className="hero-title">Providing a safe and secure space to let it all out...</h1>

            <button
            className="hero-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
            Get Started →
            </button>
        </div>

        <SocialIcons />
        </section>
    );
    };

    export default Hero;




