import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';


export const mainListItems = (
  <div>
    <ListItem button>
    <Avatar sx={{ m: 1, bgcolor: 'black',color:'white' }}>
        <PeopleIcon />
    </Avatar>
      <ListItemText primary="Thông tin cá nhân" />
    </ListItem>
    <ListItem button>
    <Avatar sx={{ m: 1,  bgcolor: 'black',color:'white' }}>
        <BarChartIcon />
    </Avatar>
      <ListItemText primary="Kết quả học tập" />
    </ListItem>
    <ListItem button>
    <Avatar sx={{ m: 1, bgcolor: 'black',color:'white'  }}>
        <DashboardIcon />
    </Avatar>
      <ListItemText primary="Đăng kí tín chỉ" />
    </ListItem>
    
    <ListItem button>
    <Avatar sx={{ m: 1,  bgcolor: 'black',color:'white' }}>
        <LayersIcon />
    </Avatar>
      <ListItemText primary="Dữ liệu học phí" />
    </ListItem>
  </div>
);

 export const secondaryListItems = (
   
  <div>

    <ListSubheader inset>Thông báo </ListSubheader>
    <ListItem button>
      <IconButton>
      
      </IconButton>
      <ListItemText primary="Nộp tiền học phí" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
     
      </ListItemIcon>
      <ListItemText primary="Cập nhật sức khoẻ" />
    </ListItem>
 
  </div>
 );

 