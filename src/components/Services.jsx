









import React from 'react';
import './Services.css';

const Services = () => {

  return (
    <section class="services">
  <div class="container">
    <header class="services-header">
      <h2>Our Services</h2>
      <p>
        Our team offers evidence‑based counselling and psychotherapy across a wide range of needs. Explore common concerns and the ways support is provided.
      </p>
    </header>

    <div class="services-grid">
      <div class="services-col">
        <h3>What can we help with?</h3>
        <ul class="bullet-list">
          <li>Attachment and bonding challenges</li>
          <li>Life transitions and adjustment concerns</li>
          <li>Behavioural and self‑management difficulties</li>
          <li>Bullying and peer relationship issues</li>
          <li>Coping with family changes (e.g., separation, divorce)</li>
          <li>Disruptive or challenging behaviours</li>
          <li>Exam stress and academic pressures</li>
          <li>Family tension and communication difficulties</li>
          <li>Grief, loss, and bereavement support</li>
          <li>Low mood and emotional wellbeing challenges</li>
          <li>Personality and interpersonal style difficulties</li>
          <li>Social and communication challenges</li>
          <li>Stress, anxiety, and everyday coping skills</li>
        </ul>
      </div>

      <div class="services-col">
        <h3>How can we help?</h3>
        <ul class="bullet-list">
          <li>Behavioural and habit‑change strategies</li>
          <li>Cognitive‑Behavioural techniques (CBT)</li>
          <li>Individual counselling and emotional support</li>
          <li>Positive psychology approaches for wellbeing</li>
          <li>Family and relationship support sessions</li>
          <li>Mindfulness‑based strategies</li>
          <li>Play‑ and art‑based therapeutic activities</li>
          <li>Stress resilience and coping skills</li>
          <li>Healthy anger and emotion regulation strategies</li>
          <li>Hypnotherapy</li>
          <li>Self‑improvement</li>
        </ul>
      </div>
    </div>

    <div class="tele-note">
      <h4>Tele‑counselling services</h4>
      <p>
        Online support sessions are available. Please WhatsApp or email to learn more.
      </p>
    </div>
  </div>
</section>

  );
};

export default Services;
