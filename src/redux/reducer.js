import * as types from "./actionType";
const initialState = {
  account: {},
  accounts: [],
  users: [],
  user: {},
  regis: [],
  regi: {},
  infos: [],
  info: {},
  loading: true,
  transcripts: [],
  transcript: {},
  subjects: [],
  subject: {},
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case types.UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    //Account
    case types.POST_ACCOUNT:
      return {
        ...state,
        loading: false,
      };
    case types.CHECK_ACCOUNT:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    //Student
    case types.GET_STUDENT:
      return {
        ...state,
        infos: action.payload,
        loading: false,
      };
    case types.UPDATE_STUDENT:
      return {
        ...state,
        loading: false,
      };
    //Transcript
    case types.GET_TRANSCRIPTS:
      return {
        ...state,
        transcripts: action.payload,
        loading: false,
      };
    //Subject
    case types.GET_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
        loading: false,
      };
    case types.GET_SUB:
      return {
        ...state,
        subject: action.payload,
        loading: false,
      };
    //Regis
    case types.GET_REGIS:
      return {
        ...state,
        regis: action.payload,
        loading: false,
      };
    case types.DELETE_REGIS:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_REGIS:
      return {
        ...state,
        loading: false,
      };

    //default
    default:
      return state;
  }
};

export default usersReducers;
