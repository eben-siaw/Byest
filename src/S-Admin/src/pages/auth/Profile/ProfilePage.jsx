import React from "react";
import { makeStyles, Typography, Button, TextField } from "@material-ui/core";
import {useSelector} from 'react-redux';
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";

const ProfilePage = props => { 


  const { history } = props;
 
  const user = useSelector(state => state.auth.user);

  return (
   
    <OftadehLayout> 

    <div> Profile </div>

    </OftadehLayout>
  );
};

export default ProfilePage;
