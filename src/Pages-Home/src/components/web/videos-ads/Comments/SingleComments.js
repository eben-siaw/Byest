import React, { useState } from 'react'
import { Comment } from 'antd'; 
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core'; 
import LikeDislikes from '../Likes/LikesDisLikes';
//import clsx from '@material-ui/'


const URL = "https://mekexpress-backend.herokuapp.com"; 

//const local = "http://localhost:5080"

const SingleComment = (props) => { 

    const userId = useSelector(state => state.customer.user._id); 

    const [CommentValue, setCommentValue] = useState("") 

    const [OpenReply, setOpenReply] = useState(false)

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const variables = {
            user: userId,
            postId: props.postId,
            responseTo: props.comment._id,
            message: CommentValue
        }


        axios.post(URL + '/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    setCommentValue("")
                    setOpenReply(!OpenReply)
                    props.refreshFunc(response.data.result)
                } else {
                    alert('Failed to save Comment')
                }
            })
    }

    const actions = [ 
        <LikeDislikes comment commentId={props.comment._id} />,
        <span className="reply" onClick={openReply} key="comment-basic-reply-to">Reply comment </span>
    ]

    return (
        <div>
            <Comment
                actions={actions}
                author={props.comment.user.fullName}
                avatar={
                    <Avatar style={{color: 'red'}}> M </Avatar>
                }
                content={
                    <p>
                        {props.comment.message}
                    </p>
                }
            ></Comment>


            {OpenReply &&
                <form style={{ display: 'flex' }} onSubmit={onSubmit}>
                    <TextField
                        style={{ width: '100%'}}
                        onChange={handleChange}
                        value={CommentValue}
                        placeholder="Reply this comment"
                    />
                    <br />
                    <button className="send-btn" onClick={onSubmit}>Submit</button>
                </form>
            }
         <style jsx>  
        {` .send-btn { 
            width: 30px;
            height: 30px;
            color: var(--color-1);
            border: 1px solid var(--color-1);
            transform: translateY(-50%);
            border-radius: 50%;
            transition: 0.3s linear;
            cursor: pointer;  
            }  
            
            .reply { 
              color: blue; 
              text-decoration: none;  
            }

        `}
         </style>
        </div>
    )
}

export default SingleComment
