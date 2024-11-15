import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  // Typewriter effect for the title
  const [text, setText] = useState('');
  const fullText = 'Welcome to VibeQuest';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150); // Slower typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <nav className="navbar">
        <h1 className="navbar-title">VibeQuest</h1>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Welcome Section with Background Image */}
      <section className="welcome-section">
        <div className="background-image">
          {/* <img src="/images/bg-vibeques.jpg" alt="VibeQuest Background" className="bg-img" /> */}
        </div>
        <h2 className="typewriter">{"Welcome to VibeQuest"}</h2>
        <p>Your ultimate destination for all things gaming.</p>
        <div className="buttons">
          <button className="btn-primary">Start Playing</button>
          <button className="btn-secondary">Explore Games</button>
        </div>
      </section>

      {/* Games Section */}
      <section className="games-section">
        <h2>Our Popular Games</h2>
        <div className="games-container">
          {/* Example Game Cards */}
          <div className="game-card">
            <img src="/images/game1.jpg" alt="Game 1" />
            <h3>Game 1</h3>
            <p>Action-packed and full of adventure.</p>
            <button className="btn-primary">Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game2.jpg" alt="Game 2" />
            <h3>Game 2</h3>
            <p>A thrilling puzzle game to challenge your mind.</p>
            <button className="btn-primary">Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game3.jpg" alt="Game 3" />
            <h3>Game 3</h3>
            <p>Racing and strategy in a single game.</p>
            <button className="btn-primary">Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game4.jpg" alt="Game 4" />
            <h3>Game 4</h3>
            <p>An exciting new adventure awaits!</p>
            <button className="btn-primary">Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game5.jpg" alt="Game 5" />
            <h3>Game 5</h3>
            <p>Enter the world of fantasy and magic.</p>
            <button className="btn-primary">Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game6.jpg" alt="Game 6" />
            <h3>Game 6</h3>
            <p>Explore the mysteries of the deep sea.</p>
            <button className="btn-primary">Play Now</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-text">
          <h2>About VibeQuest</h2>
          <p>
            VibeQuest is your ultimate gaming platform where adventure, strategy, and fun collide. Explore various genres, discover new challenges, and immerse yourself in thrilling experiences.
          </p>
          <Link to="/about">
            <button className="btn-primary">Learn More</button>
          </Link>
        </div>
        <div className="about-image">
          <img src="/images/bg-vibequest-about.jpg" alt="About VibeQuest" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 VibeQuest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
