
    import React from "react";
    import "./About.css";

    export default function About() {
    const badges = [
        { src: "/icon1.png", alt: "SME500 Singapore Award Winner 2022", caption: "Award Winner 2022" },
        { src: "/icon2.png", alt: "Best in Singapore Feature", caption: "As featured on BestinSingapore" },
        { src: "/icon3.jpg", alt: "Top in Singapore by MediaOne", caption: "As featured on MediaOne" },
        { src: "/icon4.png", alt: "Smart Singapore Feature", caption: "As featured on Smart Singapore" },
        { src: "/icon5.jpg", alt: "Mirchelle Feature", caption: "Mirchelle" },
    ];

    return (
        <section className="about wrap" aria-labelledby="about-title">
        <div className="about__header">
            <h2 id="about-title" className="about__title">
            Let’s talk about it …
            </h2>

            <button
            className="about__lang"
            type="button"
            aria-label="View this section in Chinese"
            onClick={() => window.dispatchEvent(new CustomEvent("toggle-lang", { detail: "zh" }))}
            >
            中文
            </button>
        </div>

        <div className="about__grid">
            <div className="about__copy">
            <p className="fade-in delay-1">
                With the ever-changing demands from society, people today experience high levels of distress. Therefore, here at The Psychology Clinic (Singapore) we aim to provide a safe and caring space to support individual wellbeing, relationships, and family through emotional or life‑stress concerns. We offer supportive psychological and counselling services for individuals, families, and couples. For a faster response, WhatsApp can be used to book a session here.
            </p>
            </div>

            <div className="about__media">
            <div className="about__photo tilt-in">
                <img
                src="/care.jpg"
                alt="Two people holding hands in support"
                loading="lazy"
                />
            </div>
            </div>
        </div>

        <div className="about__badges">
            {badges.map((b, i) => (
            <figure
                className="badge float-up"
                style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                key={b.alt}
            >
                <img src={b.src} alt={b.alt} loading="lazy" />
                <figcaption>{b.caption}</figcaption>
            </figure>
            ))}
        </div>
        </section>
    );
    }



