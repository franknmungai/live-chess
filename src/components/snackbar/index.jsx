import React, { useContext } from 'react';
import Snackbar from '@bit/mui-org.material-ui.snackbar';
import { GameContext } from '../../context/GameContext';
import { types } from '../../context/actions';

const Toast = () => {
	const { message, dispatch } = useContext(GameContext);

	const handleClose = () => {
		dispatch({ type: types.CLEAR_MESSAGE });
	};
	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={!!message}
			autoHideDuration={2500}
			onClose={handleClose}
			onExited={handleClose}
			ContentProps={{
				'aria-describedby': 'message-id',
			}}
			message={message}
		/>
	);
};

export default Toast;
