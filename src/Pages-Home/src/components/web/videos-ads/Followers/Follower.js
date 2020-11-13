import React, { useState, useEffect } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import axios from "axios";
import clsx from "clsx"; 

const local = "http://localhost:5080"; 

const URL = "https://mekexpress-backend.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  followBtn: {
    backgroundColor: blue[700],
    borderRadius: 2,
  },
}));

export default function Follower(props) { 

  const classes = useStyles();
 
  const userTo = props.userTo 

  const userFrom = props.userFrom

  const [FollowersNumber, setFollowersNumber] = useState(0) 

  const [Followed, setFollowed] = useState(false)

  const handleFollow = () => {

      let Variables = {
              userTo : userTo,
              userFrom : userFrom
      }

      if(Followed) {
          //when we are already followed 
          axios.post(local + '/follow/unFollow', Variables)
              .then(response => {
                  if(response.data.success){ 
                      setFollowersNumber(FollowersNumber - 1)
                      setFollowed(!Followed) 
                      localStorage.setItem('unfollow', !Followed)
                  } else {
                      alert('Failed to unfollow')
                  }
              })

      } else { 

          // when we are not followed yet
          axios.post(local + '/follow/Follow', Variables)
              .then(response => {
                  if(response.data.success) {
                      setFollowersNumber(FollowersNumber + 1)
                      setFollowed(!Followed) 
                      localStorage.setItem('follow', !Followed)
                  } else {
                      alert('Failed to follow')
                  }
              })
      }

  }


  useEffect(() => {

      const NumberVariables = { userTo: userTo, userFrom: userFrom } 

      axios.post(local + '/follow/followers', NumberVariables)
          .then(response => {
              if (response.data.success) {
                setFollowersNumber(response.data.followers)
              } else {
                  alert('Failed to get followers Number')
              }
          })

      axios.post(local + '/follow/following', NumberVariables)
          .then(response => {
              if (response.data.success) {
                setFollowed(response.data.following)
              } else {
                  alert('Failed to get followed Information')
              }
          })

  }, [])


  return ( 
      <div> 
    <Button
      className={clsx(classes.followBtn)} 
      size="medium"
      disableElevation
      disableFocusRipple
      disableRipple
      variant="contained"
      color="primary"
      onClick={handleFollow}
    >
      {!Followed ? "follow" : "unfollow"}
    </Button>   
    <Typography variant="body2">{FollowersNumber} followers</Typography>
    </div>
  );
}
