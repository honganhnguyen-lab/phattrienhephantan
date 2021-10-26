import React,{useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@mui/material';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(theme=>({
    root: {
 
            width: '75ch',
        
    },
}));

const AddUser = () => {
    const classes = useStyles();
    const [state,setState] = useState({
        name:'',
        email:'',
        contact:'',
        address:'',
    });
    const {name,email,contact,address} = state;

    return (
        <div>
            <form className= {classes.root} noValidate autoComplete="off">
                <TextField  id= "standard-basic" label= "Standard" />
            </form>
        </div>
    )
}

export default AddUser
