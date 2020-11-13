 import OftadehLayout from '../../../components/AdminLayout/OftadehLayout';
import React, {useEffect, useState, useCallback } from 'react';  
import axios from 'axios'; 
import {TextField, Fab, InputLabel} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';  
import {useSelector} from 'react-redux';   
import AddIcon from '@material-ui/icons/Add';   
import CloudUploadIcon from '@material-ui/icons/CloudUpload';  
import InputAdornment from '@material-ui/core/InputAdornment';
import DescIcon from '@material-ui/icons/Description' 
import TitleIcon from '@material-ui/icons/TitleSharp'
import {storage} from '../../../../../Firebase/firebase';
import LoadingSpin from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom' 


const URL = "https://nilee-nodedatabase.herokuapp.com";  

const local = "http://localhost:5080";  

const useStyles = makeStyles((theme) => ({ 

  root: { 
    display: 'flex',   
    flexDirection: 'column', 
    lineHeight: 2
  },  

}));

const PostAds = () => { 
   
  const classes = useStyles();  
  
    
  const [videoFile, setVideoFile] = useState("")
  const [videotitle, setvideoTitle] = useState(""); 
  const [description, setdescription] = useState("");  
  const [firebaseVideo, setfirebaseVideo] = useState(""); 

  const [loading, setLoading] = useState(false); 
 
  const [errors, setFileErrors] = useState("");  

  const admin = useSelector(state => state.auth.user._id); 
 
  const handleDescription = (event) => { 
    setdescription(event.currentTarget.value)
    }  
 
  const handleTitle = (event) => { 
  setvideoTitle(event.currentTarget.value)
  }  
     
  const handleOnChange = (event) => {  
   
    const Video = event.target.files[0]; 
 
     if(Video.size > 15000000 ) { 
       setFileErrors("Video ad should not exceed 15mb!") 
       return null;
     } 
 
      if(Video.type !== "video/mp4") { 
       setFileErrors("Only mp4 video formats are supported!") 
       return null;
     } 
     
     if(Video.type === "video/mp4" || Video.size < 15000000 || Video.type === "video/mkv") { 
       setFileErrors(""); 
       setVideoFile(event.target.files[0]);  
     }
  } 
  
  console.log(videoFile);

  const handleSubmit = (event) => { 
     
   event.preventDefault();

      //validation  
    if(videotitle === "" || description === "" || videoFile === "") {  
        toast("All Fields are required"); 
        return null;
    }
      
    console.log(videoFile); 
    
    setLoading(true);
    //uploading task to storage 

    let videoObject = {}

    const uploadTask = storage.ref(`/Advideos/${videoFile.name}`).put(videoFile);
 
    uploadTask.on('state_changed',
    (snapshot) => {},
    (error) => {
    alert(error);
    },
    () => { 
   
    storage.ref('Advideos').child(videoFile.name).getDownloadURL().then(url => {  
    
      setfirebaseVideo({url})
    
      const details = { 
        Admin: admin,  
        title: videotitle, 
        description: description,  
        videoName: videoFile.name, 
        videoUrl: url 
      } 
    
      // saving video data to mongo
      axios.post(local + `/video/saveVideoAds`, details)
      .then(res => { 
      if(res.data.message){   
      setLoading(false); 
      toast("Your Video has been Uploaded!")
      window.location = "/videos";
      } 
    })  
    .catch(error => {   
      toast("Your request could not be processed. Try again!");  
      setLoading(false);
    }) 
            
    });      
   
  }); 

  }

  return ( 
    <OftadehLayout> 
    <div className={classes.root}>   
  <div className="side-btn"> <Link style={{textDecoration: 'none'}} to="/admin/videos"><Button variant="outlined" color="primary" size="large"> My Videos </Button> </Link> </div> 
    <label htmlFor="video">
       <input
         style={{ display: 'none' }}
         id="video"
         name="video"  
         type="file" 
         onChange={handleOnChange} 
       />
       <Fab color="secondary" size="large" component="span" aria-label="add">
         <AddIcon />
       </Fab>
     </label> 
       <br/>
      {errors ? <p className="errors-show"> {errors} </p> : <li style={{listStyle: 'none', color: "blue", paddingTop: '6px'}}> {videoFile.name} </li> }

    <TextField 
         fullWidth
         label="Title of Ad"  
         onChange={handleTitle}  
         value={videotitle} 
       />        
       <br/>
        <TextField
         label="Description here.."  
         variant="outlined"  
         rows={5} 
         fullWidth
         rowsMax={10} 
         multiline
         onChange={handleDescription}  
         value={description} 
         InputProps={{
           startAdornment: (
             <InputAdornment position="start">
               <DescIcon />
             </InputAdornment>
           ),
         }}
       />    
   
      <br/>
     <div className="ads-btn">  
        <Button onClick={handleSubmit} color="primary"
         variant="contained" 
         startIcon={<CloudUploadIcon />} > Submit Video </Button>   
      </div>
        
      <div style={{padding: 10}}> 
        {loading ? <LoadingSpin  color="green" timeout={150000}/> : null } 
      </div>  
      <style jsx>{` 
      .errors-show { 
        color: red; 
        font-size: 13px;
      } 

      .side-btn { 
        position: absolute; 
        right: 0;   
        padding-right: 5px;
      } 
      `}  
      </style>
    </div>
     </OftadehLayout> 
  );

} 

export default PostAds;