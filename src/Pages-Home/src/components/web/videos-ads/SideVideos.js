import React from 'react'; 
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import VideoThumbnail from 'react-video-thumbnail'
import moment from 'moment'; 
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux';

 const local = "http://localhost:5080"; 

 const URL = "https://mekexpress-backend.herokuapp.com";

 const SideVideos = () => { 
  
 const userId = useSelector(state => state.customer.user._id)

 const [videoAds, setVideos] = useState([]);  
 const [videoId, setVideoId] = useState([]) 
 const [views, setViewsCount] = useState(0); 

  const getVideos = async () => {  
  const response = await axios.get(URL + "/video/getVideoAds"); 
  console.log(response.data.videos)
  setVideos(response.data.videos);  
  setVideoId(response.data.videos._id);
  }   

  const getViews = () => { 
    axios.post(URL + `/views/getViews`, videoId)
    .then(response => {
        console.log('getViews', response.data)

        if (response.data.success) { 
          
          //How many views does this video or comment have 
            setViewsCount(response.data.views.length)

            //if I already watched this video or not 
            response.data.views.map(view => {
                if (view.userId === userId) {
                    return view;
                }
            })
        } else {
            alert('Failed to get views')
        }
    }) 

  }


  const handleVideoClick = (videoId) => {  
   window.location = `/videoPlayback/${videoId}`
  }
 
 useEffect(() => { 
 getVideos(); 
 getViews();
 },[]);   
  

 const renderSideAds = () => {  
   
  return videoAds.map(videos => { 

  const color = Math.ceil(Math.random() * 3);

    return (  

  <div> 
     
    <div className="video-card" key={videos._id}> 
      <a
       style={{ textDecoration: "none", cursor: 'pointer' }}
       onClick={() => handleVideoClick(videos._id)}
      >
      <div className="thumbnail">
        <VideoThumbnail
          videoUrl={videos.videoUrl}  
          thumbnailHandler={(thumbnail) => console.log(thumbnail)}
          snapshotAtTime={2}
          cors={true} 
          width={100}
        />  
      </div> 
      </a> 
    </div> 

  <div className="detail"> 
    <div
     className="detail-icon"
     style={{ background: `var(--color-${color}-transparent)` }}
    >
    <i className="ion-videocamera" style={{ color: `var(--color-${color})` }}> </i>
   </div>
   <div className="detail-info">
     <h5 style={{ marginBottom: "5px", color: "var(--text-color)" }}>{videos.title}</h5> 
    <p style={{ fontSize: "15px", color: "grey" }}>{videos.Admin.firstName}</p>
    </div>   
  </div> 
  </div>
  );

 })

} 

 return ( 
  
   
  <div>
    
    <div className="video-container-inner">
      {renderSideAds()} 
    </div> 
  
  <style jsx>{` 
   .video-container-inner {
    display: flex;
    flex-direction: column; 
    flex-wrap: wrap;
    overflow: auto; 
    margin-top: 100px;
    padding-right: 17px;
  }

  .video-card {
    width: 100%;
    height: 150px;
    background: #fff;
    border-radius: 0;
    box-shadow: 0 0 5px #00000032;
    padding: 0px;
    overflow: hidden;
  }

  .video-card .thumbnail {
    background: #f1f1f1;
  }

  
  .video-card .detail {
    display: flex;
    margin-bottom: auto;
    padding: 20px;
    padding-top: 25px;
    background: #fff;
  } 

  .video-card .detail .detail-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  } 

  .video-card .detail .detail-info {
    flex: 1;
    margin-left: 10px;
    padding: 10px 0;
  }

  .video-card .actions {
    display: flex;
    justify-content: flex-end;
  }

  .video-card .actions .button {
    font-weight: 300;
    padding: 10px;
  }
  .react-thumbnail-generator {
    width: 100%;
  }
  .react-thumbnail-generator .snapshot-generator {
    width: 100% !important;
    height: 280px !important; 
    object-fit: cover; 
  }

  @media (max-width: 600px) {
    .video-container-inner { 
      flex-wrap: wrap;
    }
  }
  `}</style>
 </div>
 );


} 


export default SideVideos;