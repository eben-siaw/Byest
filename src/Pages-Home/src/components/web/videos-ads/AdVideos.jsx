import React from 'react'; 
import axios from 'axios';
import {useEffect, useState} from 'react'; 
import VideoThumbnail from 'react-video-thumbnail'
import moment from 'moment'; 
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux'; 

 const local = "http://localhost:5080"; 

 const URL = "https://mekexpress-backend.herokuapp.com";

 const AdVideos = () => { 

  const userId = useSelector(state => state.customer.user._id);
  
 const [videoAds, setVideos] = useState([]);  
 const [videoId, setVideoId] = useState([]) 
 const [views, setViewsCount] = useState(0);

  const getVideos = async () => {  
  const response = await axios.get(local + "/video/getVideoAds"); 
  console.log(response.data.videos)
  setVideos(response.data.videos); 
  setVideoId(response.data.videos._id);
  }   
  
  const getViews = () => { 
    axios.post(local + `/views/getViews`, videoId)
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
     style={{ background: `var(--color-${color}-transparent)` }}
    >
    <i className="ion-videocamera" style={{ color: `var(--color-${color})` }}> </i>
   </div>
   <div className="detail-info">
     <h5 style={{ marginBottom: "5px", color: "var(--text-color)" }}>{videos.title}</h5> 
       <p style={{ fontSize: "15px", color: "grey" }}>{videos.Admin.firstName} {videos.Admin.lastName}</p>
       <p style={{ fontSize: "14px", color: "grey"}}> {views} views • {moment(Date.parse(videos.createdAt)).fromNow()} </p>
    </div>   
  </div> 
  </div>
  );

 })

} 

 return ( 
  
   
  <div>
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
    width: 75%;
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
    height: 260px !important; 
    object-fit: contain; 
  }

  @media (max-width: 600px) {
    .video-container-inner {
      grid-template-columns: 1fr;
    }
  }
  `}</style>
 </div>
 );


} 


export default AdVideos;