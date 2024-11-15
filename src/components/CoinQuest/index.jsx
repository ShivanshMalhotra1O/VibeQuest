import { Link } from 'react-router-dom';
import './styles.css';

function CoinQuestGame() {
	return (
		<div className="home-page">
			<nav className="navbar">
				<h1 className="navbar-title">VibeQuest</h1>
				<ul className="navbar-links">
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>

			{/* Games Section */}
			<section className="games-section">
				<h2>Coin Quest</h2>
				<div className="games-container">
					<iframe
						src="https://mukund1606.github.io/vibe-quest/coin-quest"
						id="game-iframe"
						title="Coin Quest"
					></iframe>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; 2024 VibeQuest. All Rights Reserved.</p>
			</footer>
		</div>
	);
}

export default CoinQuestGame;
