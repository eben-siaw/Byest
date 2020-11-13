import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import { useSelector } from 'react-redux';
import VideoThumbnail from 'react-video-thumbnail';
//import VideoThumbnail from 'react-video-thumbnail'; 

const local = "http://localhost:5080"

const Videos = () => { 
 
  const [videos, setVideos] = useState([]); 

  const admin = useSelector(state => state.auth.user._id);
 
 const getVideoAds = async () => { 
  const results = await axios.get(local + `/video/getVideoAds/${admin}`); 
   setVideos(results.data.videos)
 }  

 const getViews = async () => { 
  const results = await axios.get(local + `/video/getVideoAds/${admin}`); 
   setVideos(results.data.videos)
  } 


 useEffect(() => { 
  getVideoAds();
 }, []) 

 const adminVideos = videos.map(() => { 

 return (  
  <div className="container-video"> 
  <div className="cards-items">  

    <div className="thumbnail">  
     <VideoThumbnail 
      width={100}
     />
    </div> 
    <div className="video-details">
     <span> {videos.title} </span>  
     <span> {videos.views} </span>
    </div> 
   </div> 
  </div> 
 );

 })

 return ( 
 
  <div className="container-video"> 
 
    <div> {adminVideos} </div> 
  <style>{` 
  .container-video { 
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    width: 100%;
  } 

  .cards-items { 
   width: 150px; 

  }
  `} 
  </style> 

  </div>
     

 );



} 

export default Videos;