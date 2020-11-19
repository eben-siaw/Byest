import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import OftadehLayout from '../../../components/AdminLayout/OftadehLayout';
import { useState } from "react";
import axios from "axios";
import VideoThumbnail from "react-video-thumbnail";
import LoadingSpin from "react-loader-spinner";
import MoreIcon from '@material-ui/icons/MoreVert';

const URL = "https://mekexpress-backend.herokuapp.com";

const local = "http://localhost:5080"; 

const MyAds = () => { 

  const admin = useSelector((state) => state.auth.user._id);  

  const authAdmin = useSelector(state => state.auth.isLoggedIn); 

  const [Videos, setVideos] = useState([]); 
 
  const [loading, setLoading] = useState(true); 
   
  const getvideos = async () => {
    const res = await axios.get(URL + `/video/getVideoAds/${admin}`);
    setVideos(res.data.videos); 
    setLoading(false);
  };
  
 const onItemDelete = async id => {  
   try {
      await axios.delete(URL + `/video/removeVideo/${id}`) 
      .then(res => { 
        if(res.data) { 
         getvideos();
        }
      })
   } catch (error) {
     console.log(error);
   }
 
 }

  console.log(Videos);

  useEffect(() => {
    getvideos();
  }, []);
  
  const UpdateSearchResults = (e) => { 
    
  }

  const reduceDescription = (description) => {
    const { length } = description;
    const max = 60;
    if (length >= max) {
      return description.slice(0, max) + "...";
    }
    return description;
  };
  
   // get only public videos
  const renderVideos = () => { 

    const color = Math.ceil(Math.random() * 3);

    return Videos.map((videos, index) => { 
     
        return ( 
       <div>    
          <div className="stream-card" key={videos._id}> 
            <a
             style={{ textDecoration: "none" }}
             href=""
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

         <div>   
             <div className="auth-list">     
                <AuthOptions 
                onDelete={() => onItemDelete(videos._id)}
                 videoId={videos._id}
              /> 
               </div>
            <div className="detail"> 
              <div
                className="detail-icon"
                style={{width: 30, background: `var(--color-${color}-transparent)` }}
              >
                <i
                  className="fas fa-ad"
                  style={{fontSize: 22, color: `var(--color-${color})` }}
                ></i>
              </div>
              <div className="detail-info">
                <h5 style={{ marginBottom: "5px", color: "var(--text-color)" }}>
                  {videos.title}
                </h5> 
                <p style={{ fontSize: "14px", paddingTop: "-12px", color: "grey"}}>
                  {reduceDescription(videos.description)}
                </p>
              </div>     
            </div>  
           
          </div>
      </div> 
      );

    });
  }; 

/*  const renderCreateButton = () => {
    if (authUserId) {
      return (
        <Link className="add-button" to="/dashboard/instructorhub">
          <img width="50%" src="/img/addIconFlat.svg" alt="add Icon" />
        </Link>
      );
    }
  }; */
  if (Videos.length > 0) { 

    return ( 
      <OftadehLayout> 
      <div className="stream-list-container">
        <div className="stream-list-container-inner">
          {renderVideos()}
          {loading ? <LoadingSpin type="ThreeDots" color="red"/> : null}
        </div> 

        <style jsx>{`
          .stream-list-container-inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 20px;
            padding: 20px 0;
            overflow: auto;
          }

          .stream-card {
            width: 85%;
            height: 175px;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #00000032;
            padding: 0px;
            display: grid;
            grid-template-rows: 200px 1fr;
            overflow: hidden;
          }

          .stream-card .thumbnail {
            background: #f1f1f1;
          } 

          .auth-list { 
           padding-left: 22rem; 
           padding-top: 1.2em;
          }

          .stream-card .auth-options {
            width: 30px; 
            position: absolute;
            top: 0;
            right: 20px; 
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.2s;
          } 
          
          .stream-card .auth-options:hover {
            background: #00000025;
          }
          .stream-card .option-list {
            position: absolute;
            top: 110%;
            right: 0;
            font-size: 14px;
            color: red;
            box-shadow: 0 0 10px #00000025;
            border-radius: 5px;
            background: #fff;
            overflow: hidden;
          }

          .stream-card .option-list > * {
            padding: 10px 30px;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          }

          .stream-card .option-list > *:hover {
            background: #f9f9f9;
          }

          .stream-card .detail {
            display: flex;
            margin-bottom: auto;
            padding: 10px;
            background: #fff;
          }
          .stream-card .detail .detail-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 25px;
          }
          .stream-card .detail .detail-info {
            flex: 1;
            margin-left: 10px;
            padding: 10px 0;
          }

          .stream-card .actions {
            display: flex;
            justify-content: flex-end;
          }

          .stream-card .actions .button {
            font-weight: 300;
            padding: 10px;
          }
          .react-thumbnail-generator {
            width: 100%;
          }
          .react-thumbnail-generator .snapshot-generator {
            width: 100% !important;
            height: 267px !important;
          }

          @media (max-width: 600px) {
            .stream-list-container-inner {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div> 
      </OftadehLayout>
    );
  }  
   else { 
    return ( 
      <OftadehLayout>  
      <div> No videos uploaded </div>; 
      </OftadehLayout>
    );
  } 

};

const AuthOptions = ({videoId, onDelete}) => {
  const [show, setShow] = useState(false); 

  return (
    <div className="auth-options">
      <MoreIcon
        onClick={() => setShow(!show)}
        style={{
          fontSize: "25px",
          color: "var(--text-color)",
          cursor: "pointer",
        }}
        className="fas fa-list"
      ></MoreIcon>
      <div
        className="option-list"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <Link
          to={`/dashboard/videos/edit/${videoId}`}
          className="delete-button"
          style={{ color: "var(--color-2)" }}
        >
        </Link> 
        <span
          onClick={onDelete}
          className="delete-button"
          style={{ color: "red" }}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default MyAds;
