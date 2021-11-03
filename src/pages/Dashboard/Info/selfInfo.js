import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Grid } from '@mui/material';

import {useDispatch,useSelector} from "react-redux";
import { getStudent} from '../../../redux/action';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import { updateStudent } from '../../../redux/action';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.10)' }}
  >
    •
  </Box>
);
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
// export default function
const SelfInfo=() => {
  const [state, setState]= useState({
    address:'',
    phone: '',
    birthday: '',
  
  })
  let dispatch = useDispatch();
  
  const [snackbar,setSnackbar] = useState({
    opening: false,
  vertical: 'top',
  horizontal: 'right',
  })
  const { vertical, horizontal, opening } = snackbar;
  const {infos} = useSelector((state) => state.data);
  useEffect(()=>{
    dispatch(getStudent());
},[]);
useEffect(()=>{
  if(infos[0]){
       setState({...infos[0]});
  }
},[infos[0]])

  const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
const handleClose1  = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setSnackbar({  vertical: 'top',horizontal: 'center', opening: false });
};

const {address,phone,birthday} = state;
const handleInputChange = (e) =>{
  let {name,value}= e.target;
  setState({...state,[name]:value})
}
const handleSubmit =(e)=>{
  e.preventDefault();
  if(!address || !phone|| !birthday){
      console.log('error');
  }else{
      dispatch(updateStudent(state));
      handleClose();
      setSnackbar({ opening: true,  vertical: 'top',horizontal: 'right' });
      dispatch(getStudent());
      
  }

};
  return (
    <Card sx={{ minWidth: 275}}>
       <Grid container spacing={2}>
       <Grid item xs={12} md={12} lg={4}>
      <CardMedia
      component="img"
      height="140"
      image="/static/avatars/avatar_24.jpg"
      alt="green iguana">
        </CardMedia>
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
      <CardContent>
        <Typography variant="h5" component="div">
          THÔNG TIN CÁ NHÂN
        </Typography>
      </CardContent>
      
      <CardContent>
      
      {infos && infos.map((info) =>(
        <Typography variant="body1" color="text.secondary" align="justify" key={info.id}>

        Họ và tên: <b>NGUYEN THI A</b>
        <br/>
        Giới tính : <b>Nữ </b>
        <br/>
        Ngày sinh: <b>{info.birthday}</b>
        <br/>
        Năm vào trường: <b>2018</b>
        <br/>
        Lớp: <b>IT-LTU</b>
        <br/>
        Số điện thoại : <b>{info.phone}</b>
        <br/>
        Bậc đào tạo : <b>SIE</b>
        <br/>
        Chương trình : <b>Công nghệ thông tin (LTU 15+)</b>
        <br/>
        Khoa/Viện quản lý : <b>Viện Công nghệ thông tin và truyền thông</b>
        <br/>
        Email: <b>a.nt@sis.hust.edu.vn</b>
        <br/>
        Địa chỉ: <b>{info.address}</b>
        <br/>
        
        </Typography>
      
      ))}
        <br/>
        <Button sx={{backgroundColor:'#9e1010',color:'white','&:hover':{
      backgroundColor:'black'
    }}} variant='success' onClick={()=>handleClickOpen()}>
        Cập nhật
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Thông tin cá nhân</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lưu ý: Cập nhật thông tin cá nhân thực sự khi cần thiết
          </DialogContentText>
          <Box
            component="form"
            Validate
            autoComplete="off"
    >           
          <TextField
            autoFocus
            margin="dense"
            name="address"
            label="Địa chỉ"
         
            value={address}
            onChange={handleInputChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            name="phone"
            label="Số điện thoại"
            value={phone}
            onChange={handleInputChange}
           
            fullWidth
            variant="standard"
          />
           <TextField
           name="birthday"
        id="input-with-icon-textfield"
        label="Ngày sinh"
        value={birthday }
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             
            </InputAdornment>
          ),
        }}
        type="date"
        fullWidth
        variant="standard"
      />
         </Box>
        </DialogContent>
        <DialogActions>
          <Button variant= "error" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Snackbar severity="error"
        anchorOrigin={{vertical, horizontal}}
        open={opening}
        autoHideDuration={3000}
        
      >
         <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
          Updated Success!
        </Alert>
        </Snackbar>
      </CardContent>
     
      </Grid>
    
      </Grid>
    </Card>
    
  );
}

export default SelfInfo