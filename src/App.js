import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './pages/Game';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import './App.css';

function App() {
	return (
		<Router>
			<GameProvider>
				<Route path="/" exact component={Home} />
				<Route path="/game" component={Game} />
			</GameProvider>
		</Router>
	);
}

export default App;
