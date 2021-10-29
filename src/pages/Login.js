
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import { addUser, loadAccount } from '../redux/action';
import Image from "material-ui-image";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const Login = () => {
    const [state,setState] =useState({
        email:"",
        password:"",
    });
    const {email,password}= state;

    
    let history = useHistory();
    let dispatch = useDispatch();
    const {accounts} = useSelector(state =>state.data);
   
    useEffect(()=>{
        dispatch(loadAccount());
    },[]);
   
    const handleInputChange = (e) =>{
        let {name,value}= e.target;
        setState({...state,[name]:value})
    }
    const [error,setError] = useState("");
    const account = accounts.find((_account)=>_account.email === email);
    const handleSubmit =(e)=>{
        
        e.preventDefault();
         if(!account){
             setError("Please input all field")
         }else{
         if(account.password === password){
            dispatch(loadAccount(state));
            history.push("/dashboard");
            setError("");
        }else{
            setError("Wrong email or wrong password");
        }
         }
        
    };


const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: '#8c1514' }}>
            <AccountCircleSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email "
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              
              variant="contained"
              sx={{ mt: 3, mb: 2,bgcolor:'#8c1514' }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
        }

 export default Login