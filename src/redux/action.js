import * as types from "./actionType";
import axios from "axios";
//npm run server

const getUsers = (users) =>({
    type: types.GET_USERS,
    payload:users,
});
const userDeleted= ()=>({
    type:types.DELETE_USER,
})
const userGet = (user)=>({
    type:types.GET_USER,
    payload:user,
})
const userAdd = ()=>({
    type:types.ADD_USER,
})
const userUpdate = ()=>({
    type:types.UPDATE_USER,
})
//Account
const getAccount =(accounts)=>({
    type:types.CHECK_ACCOUNT,
    payload:accounts,
})
const postAccount= ()=>({
    type:types.POST_ACCOUNT,
})

export const loadUsers =() =>{
    return function (dispatch){
        axios
        .get(`${process.env.REACT_APP_API}`)
        .then((resp) =>{
            console.log(resp.data);
            dispatch(getUsers(resp.data));
        })
        .catch((error)=>console.log(error));
    };
};

export const deleteUsers =(id) =>{
    return function (dispatch){
        axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) =>{
            dispatch(userDeleted());
            dispatch(loadUsers());
        })
        .catch((error)=>console.log(error));
    };
};

export const getUser = (id)=>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp)=>{
            dispatch(userGet(resp.data));
        })
    }
};
export const addUser = (user)=>{
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`,user)
        .then((resp)=>{
            dispatch(userAdd());
        })
        .catch((error)=>console.log(error));
    }
}
export const updateUser = (user,id)=>{
    return function (dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user)
        .then((resp)=>{
            dispatch(userUpdate());
        })
    }
}
//Account
export const addAccount =(account)=>{
    return function (dispatch){
        axios.post("http://localhost:5001/account",account)
        .then((resp)=>{
            dispatch(postAccount(resp.data));
        })
    }
}

export const loadAccount = (account)=>{
    return function (dispatch){
        axios.get("http://localhost:5001/account")
        .then((resp)=>{
            dispatch(getAccount(resp.data));
        })
    }
}
