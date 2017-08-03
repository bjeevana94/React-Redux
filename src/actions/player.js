import * as PlayerActionTypes from '../actiontypes/player';

export const addNewPlayer = (name) => {
	return {
		type:  PlayerActionTypes.ADD_NEW_PLAYER,
		name
	};
};

export const removePlayer = (index) => {
	return {
		type: PlayerActionTypes.REMOVE_PLAYER,
		index
	};
};
export const onScoreChange = (index,score) => {
	
	return {
		type : PlayerActionTypes.ON_SCORE_CHANGE,
		index,
		score
	};
};

