import React from "react";
import {Grid, Typography, Button, TextField, Paper } from "@material-ui/core"; 
import {useSelector} from 'react-redux';
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import Avatar from '@material-ui/core/Avatar';
const ProfilePage = props => { 

  const { history } = props;
 
  const user = useSelector(state => state.auth.user);

  return (
   
    <OftadehLayout> 

    <div>  
    <Grid>  
    <Paper> 
      <Avatar> A </Avatar> 
     <Typography> {user.first_name} {user.last_name} </Typography> 
     <Typography> {user.email} </Typography> 
     <Typography> {user.phone} </Typography>
      </Paper>      
    </Grid> 
    </div>

    </OftadehLayout>
  );
};

export default ProfilePage;
