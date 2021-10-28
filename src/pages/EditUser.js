import React,{useState,useEffect} from 'react';
// import { makeStyles } from '@material-ui/styles';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { ClassNames } from '@emotion/react';
import { Button } from '@mui/material';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import { getUser,updateUser } from '../redux/action';



const EditUser = () => {
  
    const [state,setState] = useState({
        name:'',
        email:'',
        contact:'',
        address:'',
    });
    let {id}= useParams();
    const {user } = useSelector((state)=>state.data);
    const [error,setError] = useState("")
    let history = useHistory();
    let dispatch = useDispatch();
    const {name,email,contact,address} = state;

    useEffect(()=>{
        dispatch(getUser(id))
    },[])

    useEffect(()=>{
        if(user){
             setState({...user});
        }
    },[user])

    const handleInputChange = (e) =>{
        let {name,value}= e.target;
        setState({...state,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!name || !address || !email || !contact){
            setError("Please input all field");
        }else{
            dispatch(updateUser(state,id));
            history.push("/");
            setError("");
        }

    };

    return (
        <div>
             <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch',margin:"auto" },
            }}
            noValidate
            autoComplete="off"
    >           
                <Button style={{width:"100px", marginTop:"20px"}} variant= "contained" color="secondary" type="submit" onClick={()=> history.push("/")} >Go Back</Button>
                <h2>Edit Users</h2>
                {error && <h3 style={{color:"red"}}>{error}</h3>}
                <TextField  style={{width:"500px",marginTop:"30px"}} id="standard-basic" label= "Name" value={name ||""} name="name" type="text" variant="standard" onChange={handleInputChange}/>
                <br/> 
                <TextField  style={{width:"500px"}} id= "standard-basic" label= "Email" value={email || ""} name="email" type="email" variant="standard" onChange={handleInputChange}/>
                <br/>
                <TextField  style={{width:"500px"}} id= "standard-basic" label= "Contact" value={contact || ""} name="contact" type="number" variant="standard" onChange={handleInputChange}/>
                <br/>
                <TextField  style={{width:"500px"}} id= "standard-basic" label= "Address" value={address || ""} name="address" type="text" variant="standard" onChange={handleInputChange}/>
                <br/>
                <Button style={{width:"100px"}} variant= "contained" color="primary" type="submit" onClick={handleSubmit} >Submit</Button>
            </Box>
        </div>
    )
}

export default EditUser
