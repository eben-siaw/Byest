import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComments';
import ReplyComment from './ReplyComments'; 
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

 const local = "http://localhost:5080"; 

 const URL = "https://mekexpress-backend.herokuapp.com";


const Comments = (props) => { 

   const userId = useSelector(state => state.customer.user._id) 

    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            message: Comment,
            user: userId,
            postId: props.postId
        }

        axios.post(URL + '/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setComment("")
                    props.refreshFunc(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    return (
        <div>
            <br />
            <p> replies</p>
            <hr />
            {console.log(props.commentLists)}

            {props.commentLists && props.commentLists.map((comment, index) => (
            <div className="comments-flow">
             <SingleComment comment={comment} postId={props.postId} postOwner={props.postOwner} refreshFunc={props.refreshFunc} />
             <ReplyComment commentLists={props.commentLists} postId={props.postId} parentCommentId={comment._id} refreshFunc={props.refreshFunc} />
            </div>       
            ))}
        

            {/* main Comment Form */}
            <form style={{ display: 'flex', marginTop: '50px' }} onSubmit={onSubmit}>
                <TextField   
                    className="video-text"
                    onChange={handleChange}
                    value={Comment}
                    label="Type comment here.."
                />
                <br />
                <div className="send-btn" onClick={onSubmit}>
                  <SendIcon color="inherit"/>
                </div>
            </form>
           <style jsx> 
           {`
            .send-btn { 
                width: 30px;
                height: 30px; 
                margin-top: 38px; 
                align-items: center;
                justify-content: center; 
                padding-left: 7px;
                padding-top: 3px;
                border: 2px solid grey;
                transform: translateY(-50%);
                border-radius: 50%;
                transition: 0.3s linear;
                cursor: pointer;  
            }  
             
            .send-btn:hover {
                background: dodgerblue;
                color: #fff;
              }

            .comments-flow { 
               display: flex; 
               align-items: center; 
               padding: 10px 0; 
            }

            .video-text { 
             width: 100%;    
            }
           `}
           </style>
        </div>
    )
}

export default Comments;
