import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      {/* Navbar with overlay on top of the image */}
      <nav className="navbar">
        <h1 className="navbar-title">VibeQuest</h1>
        <ul className="navbar-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      {/* About Section - Image */}
      <section className="about-image-section">
        <div className="about-cover">
          <img src="/images/bg-vibequest-about.jpg" alt="VibeQuest" />
        </div>
      </section>

      {/* About Section - Content */}
      <section className="about-content-section">
        <div className="about-text">
          <h2>About VibeQuest</h2>
          <p>
            VibeQuest is a revolutionary gaming platform that leverages the power of Artificial Intelligence to bring a personalized gaming experience. By detecting the mood of the user, VibeQuest tailors game recommendations that perfectly match your emotional state. Whether you're feeling relaxed, energized, or seeking a thrilling challenge, our AI ensures you get the perfect game suggestion every time.
            <br />
            <br />
            Explore a wide variety of games across different genres, and let our intelligent system help you discover your next favorite game. With VibeQuest, you're not just playing; you're experiencing gaming like never before.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 VibeQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
