import React from 'react'; 
import VideoHeader from  './VideoHeader' 
import VideoPlayback from './VideoPlayback';
import {useEffect} from 'react'; 
import {useDispatch} from 'react-redux' 
import {setCurrentCustomer} from '../../../actions/userActions'
import jwtdecode from 'jwt-decode';
import { toast, ToastContainer } from 'react-toastify';

 const Video = (props) => { 
   
  const dispatch = useDispatch();

  const {videoId} = props.match.params;
   
  useEffect(() => { 
    const usertoken = localStorage.getItem("usertoken"); 
    if(!usertoken) { 
       toast("Please Sign up first!")  
       window.location = "/login"
    }
    const decoded = jwtdecode(usertoken); 
    dispatch(setCurrentCustomer(decoded));   
   }) 

    return ( 
     
    <div> 
      <VideoHeader /> 
      <VideoPlayback videoId={videoId}/> 
      <ToastContainer/>
    </div>

    );
} 

export default Video;