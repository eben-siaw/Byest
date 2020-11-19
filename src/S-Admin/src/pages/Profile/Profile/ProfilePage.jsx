import React from "react"; 
import {deepPurple } from '@material-ui/core/colors';
import {Grid, Typography, Paper } from "@material-ui/core";  
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import Avatar from '@material-ui/core/Avatar'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }, 
  orange: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
})); 

const ProfilePage = props => { 

  const { history } = props; 
 
  const user = useSelector(state => state.auth.user);
 
  const classes = useStyles();

  return (
   
    <OftadehLayout> 

    <div>    
  <Grid >  
    <Paper className={classes.paper}> 
      <Avatar className={classes.orange}> A </Avatar> 
     <Typography> {user.first_name} {user.last_name} </Typography> 
     <Typography> {user.email} </Typography> 
     <Typography> 0{user.phone} </Typography>
    </Paper>      
  </Grid>  
    </div>

    </OftadehLayout>
  );
};

export default ProfilePage;
