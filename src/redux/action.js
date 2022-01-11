import * as types from "./actionType";
import axios from "axios";
//npm run server

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
  type: types.DELETE_USER,
});
const userGet = (user) => ({
  type: types.GET_USER,
  payload: user,
});
const userAdd = () => ({
  type: types.ADD_USER,
});
const userUpdate = () => ({
  type: types.UPDATE_USER,
});
//Account
const getAccount = (accounts) => ({
  type: types.CHECK_ACCOUNT,
  payload: accounts,
});
const postAccount = () => ({
  type: types.POST_ACCOUNT,
});
//Student Info
const getInfo = (infos) => ({
  type: types.GET_STUDENT,
  payload: infos,
});
const updateInfo = () => ({
  type: types.UPDATE_STUDENT,
});
//transcript
const transGet = (transcripts) => ({
  type: types.GET_TRANSCRIPTS,
  payload: transcripts,
});
//subject
const subGet = (subjects) => ({
  type: types.GET_SUBJECTS,
  payload: subjects,
});
const getEachSub = (subject) => ({
  type: types.GET_SUB,
  payload: subject,
});
//regis
const AddRegis = () => ({
  type: types.ADD_REGIS,
});
const deleRegis = () => ({
  type: types.DELETE_REGIS,
});
const GetRegis = (regis) => ({
  type: types.GET_REGIS,
  payload: regis,
});
// extra
const getExtras = (extras) =>({
  type:types.GET_EXTRAS,
  payload :extras
});
const getExtra = (extra)=>({
  type:types.GET_EXTRA,
  payload: extra
})

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/regis")
      .then((resp) => {
        dispatch(getUsers(resp.data));
        console.log(resp.data);
      })
      .catch((error) => console.log(error));
  };
};

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((resp) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => console.log(error));
  };
};

export const getUser = (id) => {
  return function (dispatch) {
    axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
      dispatch(userGet(resp.data));
    });
  };
};
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((resp) => {
        dispatch(userAdd());
      })
      .catch((error) => console.log(error));
  };
};
export const updateUser = (user, id) => {
  return function (dispatch) {
    axios.put(`${process.env.REACT_APP_API}/${id}`, user).then((resp) => {
      dispatch(userUpdate());
    });
  };
};
//Account
export const addAccount = (account) => {
  return function (dispatch) {
    axios.post("http://localhost:5001/account", account).then((resp) => {
      dispatch(postAccount(resp.data));
    });
  };
};

export const loadAccount = (account) => {
  return function (dispatch) {
    axios.get("http://localhost:5001/account").then((resp) => {
      dispatch(getAccount(resp.data));
    });
  };
};

//Student
export const getStudent = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/info")
      .then((resp) => {
        dispatch(getInfo(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const updateStudent = (info) => {
  return function (dispatch) {
    axios
      .put("http://localhost:5001/info/1", info)
      .then((resp) => {
        dispatch(updateInfo());
      })
      .catch((error) => console.log(error));
  };
};

//transcript
export const loadTranscripts = () => {
  return function (dispatch) {
    axios.get("http://localhost:5001/transcript").then((resp) => {
      console.log(resp.data);
      dispatch(transGet(resp.data));
    });
  };
};
//subject
export const loadSubjects = () => {
  return function (dispatch) {
    axios.get("http://localhost:5001/subject").then((resp) => {
      dispatch(subGet(resp.data));
    });
  };
};
export const getSub = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:5001/subject/${id}`).then((resp) => {
      dispatch(getEachSub(resp.data));
    });
  };
};

//regis
export const regisAdd = (regis) => {
  return function (dispatch) {
    axios.post("http://localhost:5001/regis", regis).then((resp) => {
      dispatch(AddRegis(resp.data));
      dispatch(loadRegis());
    });
  };
};
export const regisDelete = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:5001/regis/${id}`).then((resp) => {
      dispatch(deleRegis(resp.data));
      dispatch(loadRegis());

    });
  };
};
export const loadRegis = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/regis")
      .then((resp) => {
        dispatch(GetRegis(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

//extras
export const loadExtras = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5001/extra")
      .then((resp) => {
        dispatch(getExtras(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const loadEachExtra = (id) => {
    return function (dispatch) {
      console.log(id);
       axios.get(`http://localhost:5001/extra/${id}`).then((resp) => {
        console.log(resp.data);
        dispatch(getExtra(resp.data));
        
      });
      
    };
};
