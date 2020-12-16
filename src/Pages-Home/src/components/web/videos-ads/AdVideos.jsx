import React from 'react'; 
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import VideoThumbnail from 'react-video-thumbnail'
import moment from 'moment'; 
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux'; 
import { Divider } from '@material-ui/core';
import './videos.css'; 
import VideoIcon from '@material-ui/icons/AccountCircle'
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"  


 //const local = "http://localhost:5080"; 

 const URL = "https://mekexpress-backend.herokuapp.com";

 const AdVideos = () => { 

  const userId = useSelector(state => state.customer.user._id);
  
  const [loading, setLoading] = useState(true);

 const [videoAds, setVideos] = useState([]);  
 
 const [isViewed, setViewed] = useState(false); 
 const [views, setViewsCount] = useState(0);

 

  const getVideos = async () => {  
  const response = await axios.get(URL + "/video/getVideoAds"); 
  console.log(response.data.videos)
  setVideos(response.data.videos); 
  setLoading(false);
  }   
  
  const handleVideoClick = (videoId) => {     
   
    const viewsVariable = {  
      userFrom: userId, 
      updateViews: true,
      videoId: videoId
     }

    axios.post(URL + '/views/count',  viewsVariable)
    .then(response => { 
      if(response.data.success) { 
        setViewsCount(views + 1); 
        setViewed(true); 
        localStorage.setItem(true, isViewed);
      }
    })

   window.location = `/videoPlayback/${videoId}` 
  }
 
 useEffect(() => { 
 getVideos();  
 },[]);   
  

 const renderVideos = () => {  
   
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
     style={{color: `var(--color-${color}-transparent)` }}
    >
    <i className="fas fa-ad" style={{ color: `var(--color-${color})`, fontSize: 24 }} ></i>
   </div>
   <div className="detail-info">
   <p style={{ fontSize: "15px", color: "grey" }}>{videos.Admin.firstName} {videos.Admin.lastName}</p>
     <h5 style={{ marginBottom: "5px", color: "var(--text-color)" }}>{videos.title}</h5> 
       <p style={{ fontSize: "14px", color: "grey"}}> ads • {moment(Date.parse(videos.createdAt)).fromNow()} </p>
    </div>    
  </div>  
  </div>
  );

 })

} 

 return ( 
  
   
  <div className="ads-container">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner" role="listbox">
          <div className="item active">
              <Link href="/"><img className="first-slide" src="images/ba2.jpg" alt="First slide" /></Link>
          </div>
          <div className="item">
              <Link href="/"><img className="second-slide " src="images/ba.jpg" alt="Second slide" /></Link>
          </div>
          <div className="item">
              <Link href="/"><img className="third-slide " src="images/ba2.jpg" alt="Third slide" /></Link>
          </div>
      </div>
  </div>{/* /End of carousel */} 
    <br/> 

    <div className="product">  
     
     <div className="container"> 
     <br/>
          <div className="spec">
                <h3>Recommended Ads</h3>
              <div className="ser-t">
                  <b />
                  <span><i /></span>
                  <b className="line" />
              </div> 
          </div>  
        
      </div>    
    <div className="video-container-inner">
      {renderVideos()}   
    <div className="loader-spin"> 
    {loading ? <Loader type="ThreeDots" color="red" height={55} width={65} timeout={15000}/> : null}  
    </div>
    </div> 
  </div> 

  <style jsx>{` 
   .video-container-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    padding: 20px 0;
    padding-left: 25px;
    overflow: auto;
  }

  .video-card {
    width: 80%;
    min-height: 170px;
    background: #fff;
    border-radius: 5px; 
    box-shadow: 0 0 5px #00000032;
    padding: 0px;
    display: grid;
    grid-template-rows: 200px 1fr;
    overflow: hidden;
  }

  .video-card .thumbnail {
    background: #f1f1f1;
  }

  
  .video-card .detail {
    display: flex;
    margin-bottom: auto;
    padding: 20px;
    padding-top: 30px;
    background: #fff; 
    border-bottom: 1px solid black;
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

  .ads-container { 
    padding-top: 135px;
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
      grid-template-columns: 1fr;
    } 
  } 
  
  @media (max-width: 480px) { 
    .container { 
      padding-top: 22px; 
    }
  }
  `}</style>
 </div>
 );


} 


export default AdVideos;