import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Layout from '../layout';
import './gameover-styles.css';

const GameOver = () => {
	const { status, turn } = useContext(GameContext);
	let winner;
	if (status === 'checkmate') {
		if (turn === 'b') {
			winner = 'white';
		} else {
			winner = 'black';
		}
	}

	const Content = () => (
		<React.Fragment>
			<h1>Game over</h1>
			<p>
				The game ended in a <mark>{status}</mark>
			</p>
			{winner && (
				<p>
					<mark>{winner}</mark> won
				</p>
			)}

			<img
				src={require('../../assets/play-again.jpg')}
				alt="play again"
				className="img"
			/>
			<button>Play Again</button>
		</React.Fragment>
	);

	const Image = () => (
		<img
			className="bg-img"
			src={require('../../assets/game-over.jpg')}
			alt="game over"
		/>
	);
	return <Layout Image={Image} Content={Content} />;
};

export default GameOver;
