import React from 'react';
import './App.css';
import Game from './pages/Game';
import { AppProvider } from './context';

function App() {
	return (
		<AppProvider>
			<Game />;
		</AppProvider>
	);
}

export default App;
