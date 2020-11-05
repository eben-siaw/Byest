import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import OftadehListItemIcon from "./sections/OftadehListItemIcon";
import OftadehListItemAvatar from "./sections/OftadehListItemAvatar";
import axios from 'axios'; 
import {useEffect, useState} from 'react'; 
import {useSelector} from 'react-redux'; 

const http = "http://localhost:5080";

const OftadehListItems = props => {
  const { data, type, divider, button } = props; 
 
  const admin = useSelector(state => state.auth.user._id);
 
  const [notification, setNotification] = useState([]);

  const FetchOrders = () => {   

    axios.get(http + `/orders/getOrders/${admin}`) 
    .then(response => { 
        if(response.data.message) {  
          setNotification(response.data.orders);  
        } 
    })
   }   

   useEffect(() => { 
    FetchOrders();
   })
   
   console.log(notification); 

  return (
    <>
      {notification.map(item => (
        <ListItem divider={divider} button={button} key={item._id}>
          <React.Fragment>
            {type === "ListItemIcon" && <OftadehListItemIcon item={item} />}

            {type === "ListItemAvatar" && <OftadehListItemAvatar item={item} />}

            <ListItemText>{item.name} from {item.city} requested for an order. Check it out!</ListItemText>
          </React.Fragment>
        </ListItem>
      ))}
    </>
  );
};

export default OftadehListItems;
