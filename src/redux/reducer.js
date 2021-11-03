import * as types from "./actionType";
const initialState = {
    account:{},
    accounts:[],
    users: [],
    user: {},
    infos:[],
    info:{},
    loading:true,
    transcripts:[],
    transcript:{},
}

const usersReducers = (state=initialState,action)=>{
    switch(action.type){
        case types.GET_USERS :
        return {
            ...state,
            users: action.payload,
            loading:false,
        }
        case types.DELETE_USER :
            return {
                ...state,
                loading:false,
            }
        case types.GET_USER :
            return{
                ...state,
                user:action.payload,
                loading:false,
            }
        case types.ADD_USER :
            return{
                ...state,
                loading:false,
            }
        case types.UPDATE_USER:
            return{
                ...state,
                loading:false,
            }
        case types.POST_ACCOUNT:
            return{
                ...state,
                loading:false
            }
        case types.CHECK_ACCOUNT:
            return{
                ...state,
                accounts:action.payload,
                loading:false
            }
        case types.GET_STUDENT :
            return {
                ...state,
                infos: action.payload,
                loading:false,
            }
        case types.UPDATE_STUDENT :
            return {
                ...state,
                loading:false,
            }
        case types.GET_TRANSCRIPTS :
            return{
                ...state,
                transcripts: action.payload,
                loading:false,
            }
        default:
            return state;
    }
};


export default usersReducers;
