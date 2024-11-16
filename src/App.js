import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import CoinQuest from './components/CoinQuest';
import DonkeyKong from './components/DonkeyKong';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Pacman from './components/Pacman';
import Signup from './components/Signup';
import Snake from './components/Snake';
import SpaceInvaders from './components/SpaceInvaders';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Signup />} />
				<Route path="/landing" element={<LandingPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				{/* Games */}
				<Route path="/coin-quest" element={<CoinQuest />} />
				<Route path="/donkey-kong" element={<DonkeyKong />} />
				<Route path="/pacman" element={<Pacman />} />
				<Route path="/snake" element={<Snake />} />
				<Route path="/space-invaders" element={<SpaceInvaders />} />
			</Routes>
		</Router>
	);
}

export default App;
