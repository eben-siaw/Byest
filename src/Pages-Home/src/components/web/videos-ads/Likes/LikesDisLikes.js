import React, { useEffect, useState } from 'react'
import { Typography, makeStyles } from "@material-ui/core";
import ThumbsUp from '@material-ui/icons/ThumbUp'; 
import ThumbsDown from '@material-ui/icons/ThumbDown';
import axios from 'axios';  
import { blue, grey } from "@material-ui/core/colors";
import clsx from "clsx";

const local = "http://localhost:5080"; 

const URL = "https://mekexpress-backend.herokuapp.com"; 

 const useStyles = makeStyles((theme) => ({ 
    root: {
        display: "flex",
      }, 

      ratings: {
        display: "flex",
        alignItems: "center",
        color: grey[500],
        margin: theme.spacing(1),
        marginLeft: theme.spacing(0),
      }, 

      thumbBtn: {
        cursor: "pointer",
        marginRight: theme.spacing(0.5),
      }, 

      active: {
        color: blue[700],
      },
      small: { fontSize: 18 },

 }));

function LikeDislikes(props) {
 
    const classes = useStyles();

    // likes, likesAction - the state of likes in color, dilikes, dislikeAction - the state of dislikes in color

    const [Likes, setLikes] = useState(0)
    const [Dislikes, setDislikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    const [DislikeAction, setDislikeAction] = useState(null) 

    let variable = {};

    if (props.video) {
        variable = { videoId: props.videoId, userId: props.userId, userTo: props.userTo }
    } else {
        variable = { commentId: props.commentId, userId: props.userId, userTo: props.userTo }
    }

    

    useEffect(() => {

        axios.post(local + '/like/getLikes', variable)
            .then(response => {
                console.log('getLikes',response.data)

                if (response.data.success) {
                    //How many likes does this video or comment have 
                    setLikes(response.data.likes.length)

                    //if I already click this like button or not 
                    response.data.likes.map(like => {
                        if (like.userId === props.userId) {
                            setLikeAction('liked')
                        }
                    })
                } else {
                    alert('Failed to get likes')
                }
            })

        axios.post(local + '/like/getDislikes', variable)
            .then(response => {
                console.log('getDislike',response.data)
                if (response.data.success) {
                    //How many likes does this video or comment have 
                    setDislikes(response.data.dislikes.length)

                    //if I already click this like button or not 
                    response.data.dislikes.map(dislike => {
                        if (dislike.userId === props.userId) {
                            setDislikeAction('disliked') 
                            localStorage.setItem('disliked', DislikeAction)
                        }
                    })
                } else {
                    alert('Failed to get dislikes')
                }
            })

    }, [])


    const onLike = () => {

        if (LikeAction === null) {

            axios.post(local + '/like/upLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes + 1)
                        setLikeAction('liked') 
                        localStorage.setItem('liked', LikeAction)

                        //If dislike button is already clicked

                        if (DislikeAction !== null) {
                            setDislikeAction(null)
                            setDislikes(Dislikes - 1)
                        }


                    } else {
                        alert('Failed to increase the like')
                    }
                })


        } else {

            axios.post(local + '/like/unLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes - 1)
                        setLikeAction(null)

                    } else {
                        alert('Failed to decrease the like')
                    }
                })

        }

    }


    const onDisLike = () => {

        if (DislikeAction !== null) {

            axios.post(local + '/like/unDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes - 1)
                        setDislikeAction(null)

                    } else {
                        alert('Failed to decrease dislike')
                    }
                })

        } else {

            axios.post(local + '/like/upDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes + 1)
                        setDislikeAction('disliked');
                        localStorage.setItem('disliked', DislikeAction); 

                        //If dislike button is already clicked
                        if(LikeAction !== null ) {
                            setLikeAction(null)
                            setLikes(Likes - 1)
                        }

                    } else {
                        alert('Failed to increase dislike')
                    }
                })


        }


    }

    return (
        <div className={classes.root}>
            <div className={classes.ratings}>
                    <ThumbsUp  
                        className={classes.thumbBtn}
                        color={LikeAction === 'liked' ? 'primary' : 'action'}
                        onClick={onLike} />
                    <Typography variant="body2">{Likes}</Typography>
            </div> 
            &nbsp;&nbsp; 

            <div className={classes.ratings}>
                    <ThumbsDown 
                        className={classes.thumbBtn}
                         color={DislikeAction === 'disliked' ? 'secondary' : 'action'}
                        onClick={onDisLike}
                    />
                 <Typography>{Dislikes}</Typography>
            </div>
        </div>
    )
}

export default LikeDislikes;
