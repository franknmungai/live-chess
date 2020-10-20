import { actions } from './actions';

const AppReducer = (state, action) => {
	switch (action.type) {
		case actions.SET_FROM:
			return {
				...state,
				from: action.pos, //the current cell of the piece
			};
		case actions.SET_TO:
			return {
				...state,
				to: action.pos, //the cell destination of the piece
			};
		default:
			return state;
	}
};

export default AppReducer;
