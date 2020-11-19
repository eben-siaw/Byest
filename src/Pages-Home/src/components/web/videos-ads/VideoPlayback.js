import React, { useEffect, useState } from "react";
import Comments from "./Comments/Comments";
import { Link } from "react-router-dom";
import axios from "axios";
import { DefaultPlayer as Video} from 'react-html5video'; 
import 'react-html5video/dist/styles.css' 
import {useSelector} from 'react-redux'; 
import LikesDisLikes from './Likes/LikesDisLikes'; 
import moment from 'moment'
import Follower from "./Followers/Follower";
import Avatar from '@material-ui/core/Avatar';
import SideVideos from './SideVideos';
import { Divider } from "@material-ui/core";

const URL = "https://mekexpress-backend.herokuapp.com";

//const local = "http://localhost:5080"

const VideoPlayback = (props) => { 
 
  const videoId  = props.videoId; 
  
  const [commentList, setMessagelist] = useState([]) 

  const userId = useSelector(state => state.customer.user._id);

  // declare the states
  const [video, setVideo] = useState([]);  

  const [views, setViewsCount] = useState(0); 
  const [isViewed, setViewed] = useState(false);

  const [postUser, setPostUser] = useState(null); 
  const [first, setFirstName] = useState(null);
  const [last, setLastName] = useState(null); 

  const videovariable = {
    videoId: videoId, 
  };  

 
  // get video clicked and update views + 1
  useEffect(() => { 

    axios.post(URL + `/video/playAd`, videovariable) 
    .then((response) => {
      if (response.data.success) {
        console.log('response.data.video', response.data.video);
        setVideo(response.data.video); 
        setPostUser(response.data.video.Admin._id); 
        setFirstName(response.data.video.Admin.firstName); 
        setLastName(response.data.video.Admin.lastName);
      } else {
        alert("Failed to get Video");
      }
    });  
  
    // get already comments
    axios.post(URL + `/comment/getComments`, videovariable)  
    .then(response => { 
       if(response.data.success) { 
        console.log('response.data.comments', response.data.comments) 
       setMessagelist(response.data.comments) 
       } 
       else { 
          alert("failed to get comments") 
       }
    })    

    axios.get(URL + `/views/getViews/${videoId}`)
    .then(response => {
        console.log('getViews', response.data)

        if (response.data.success) { 
          
          //How many views does this video have 
            setViewsCount(response.data.views.length)

            //if I already watched this video or not 
            response.data.views.map(view => {
                if (view.userId === props.userId) {
                    setViewed(true);
                }
            })
        } else {
            alert('Failed to get views')
        }
    }) 
    
  }, []);  

  
  console.log(views);
   

  function UpdateComments(newComment) { 
    setMessagelist(commentList.concat(newComment));
  }
  
  return ( 
   
    <div className="parent-wrapper">  

    <div className="stream-container-wrapper">
    
      <div className="video-wrapper"> 
        <Video
          key={video.videoUrl}   
          controls={['PlayPause', 'Seek', 'Time', 'Fullscreen', 'Volume']}
          width='100%'
          height='100%'>  
          <source src={video.videoUrl} type="video/mp4"/>  
        </Video>    
      </div> 
   
      <div className="inner-frame">  
      <small style={{fontFamily: 'sans-serif', fontSize: 17}} className="view-text"> {views} views </small>
        <LikesDisLikes video videoId={videoId} userFrom={userId} userTo={postUser}/>    
        <Follower userFrom={userId} userTo={postUser} videoId={video._id}/>
      </div> 
     <Divider/> 
     <br/>
       <div>  
         <span className="username"> <Avatar style={{background: 'orange'}}> M </Avatar> </span> 
         <span className="username"> {first} {last} </span>
       </div>
        
          <h3 className="title">{video.title}</h3>
          <p className="desc">{video.description}</p> 
        
      <div className="comments-wrapper">
        <small className="comments-tag">
          <b>Comments:</b>
        </small>
        <Comments commentLists={commentList} postOwner={postUser} postId={video._id} refreshFunc={UpdateComments}/>
      </div>
      <style jsx>{`
        .title {
          color: dodgerblue;
          padding: 15px 0px;
        } 
        
         .parent-wrapper { 
           width: 100%;
         }

        .stream-container-wrapper {   
          width: 65%; 
          padding-left: 3rem;
        }  

        .side-stream-wrapper { 
          width: 20%;  
          height: 50px;
          position: absolute; 
          right: 0;
          top: 0;
          flex-wrap: wrap;
        }
         
        .video-wrapper { 
          display: flex;     
          flex-direction: column;  
          margin-top: 25px;
        } 

        .inner-frame { 
          display: flex; 
          flex-direction: row; 
          justify-content: space-around; 
          padding: 20px;
        } 
       
        .stream-wrapper::-webkit-scrollbar {
          display: none;
        }  

        .view-text { 
         padding-top: 14px; 
        }

        .username { 
          display: inline-block; 
          margin-right: 4px;
        }
        .comments-wrapper {
          padding: 20px 0;
          margin-bottom: 10px;
        }
        .line { 
          margin-top: 9px; 
        }
        .comments-tag {
          color: var(--color-3);
          background: var(--color-3-transparent);
          padding: 5px 10px;
          border-radius: 10px;
          margin-bottom: 10px;
          font-size: 12px;
        }
        @media (max-width: 500px) {
          .title {
            color: var(--color-2);
            padding: 24px 0px 5px 0px;
          }
          .desc {
            font-size: 14px;
          }  

          .side-stream-wrapper { 
            display: none;
          } 
          
          .view-text { 
            padding-right: 13px; 
            padding-top: 12px;
          }

          .inner-frame { 
            padding: 24px;
            padding-right: 1.2rem;
          } 

          .stream-container-wrapper{ 
            display: flex; 
            flex-direction: column; 
            overflow: auto; 
            padding-right: 14px; 
            width: 80% !important;
          }
        }
      `}</style>
    </div> 
    
    <div className="side-stream-wrapper"> 
      <SideVideos/>
    </div>

  </div>
  );
};

export default VideoPlayback;
