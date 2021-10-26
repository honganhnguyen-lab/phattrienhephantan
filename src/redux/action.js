import * as types from "./actionType";
import axios from "axios";

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
            console.log(resp.data);
            dispatch(userGet(resp.data));
        })
    }
}
