import * as PlayerActionTypes from '../actiontypes/player';

const initialstate = [
 	{
        name: "Jim Hoskins",
        score: 30,
        
    },
    {
    	name: "Jeevana Bommannagari",
    	score: 35,
     	
    },
    {
        name: "Big Boss",
        score: 21,
       
    }
];

export default function (state = initialstate, action){
	switch(action.type){
		case PlayerActionTypes.ADD_NEW_PLAYER: 
			return [
				...state,
				{
					name: action.name,
					score: 0
				}
			];
		
		case PlayerActionTypes.REMOVE_PLAYER: 
			return [
				...state.slice(0,action.index),
				...state.slice(action.index+1)
			];
		
		
		case PlayerActionTypes.ON_SCORE_CHANGE: 
			return state.map((player,index)=>{
				if(index === action.index){
					return {
						...player,
						score: player.score + action.score
					}
				}
				return player;      
			});
		
		default: {return state;}
	}
}