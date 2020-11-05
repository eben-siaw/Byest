import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateRangeIcon from "@material-ui/icons/DateRange";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import {
  Grid,
  Button,
  Divider,
  ExpansionPanelActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";  

import axios from 'axios';
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox"; 
import { useState } from "react";
import { storage } from "../../../../../Firebase/firebase";
import { useSelector } from "react-redux";

import {toast, ToastContainer} from 'react-toastify';

 const icon = <CheckBoxOutlineBlankIcon fontSize="small" />; 

 const checkedIcon = <CheckBoxIcon fontSize="small" />;
 
 const URL = "https://mekexpress-backend.herokuapp.com"

 const http = "http://localhost:5080";
 
 const category = [
  {title: "Shoes & Outfits" }, 
  {title: "Drinks & Beverages" }, 
  {title: "Bags" },
  {title: "Electrical Appliances" },
  {title: "Hair & MakeUp" },
  {title: "Grocery & Items" }, 
  {title: "Phones & Laptops"}
] 

const tags = [
  {title1: "make up" }, 
  {title1: "design" }, 
  {title1: "travel" },
  {title1: "outings" },
]

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  mb3: {
    marginBottom: "1.3rem"
  },
  mb1: {
    marginBottom: ".85rem"
  },
  my1: {
    margin: ".85rem 0"
  }
}));

export default function AddPostRightPanels({title, description, price, quantity}) { 
 
 const admin = useSelector(state => state.auth.user._id);

  const [expanded, setExpanded] = React.useState(true); 
  
  const [Category, setCategory] = useState(""); 

 const [Tags, setTags] = useState("");
 
 const [imageFile, setImageFile] = useState("");
 
 const hiddenFileInput = React.useRef(null);

  const classes = useStyles();

  const handleExpandedChange = () => {
    setExpanded(!expanded);
  };  

  const handleCategory = (event, value) => { 
    setCategory(value); 
    console.log(value);
  }
   
  const handleTags = (event, value) => { 
   setTags(value); 
   console.log(value);
  }
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  }; 

  const handleChange = (event) => {
    const fileUploaded = setImageFile(event.target.files[0]); 
    console.log(fileUploaded);
  }
 
  const handleProductSubmit = async () => {  
   
    if(title === "" || description === "" || imageFile === "") {   
      return null;
    } 
    
    console.log(imageFile);

    const uploadTask = storage.ref(`/products/${imageFile.name}`).put(imageFile);
   
    uploadTask.on('state_changed',
    (snapshot) => {},
    (error) => {
    alert(error);
    },
    () => {  

    storage.ref('products').child(imageFile.name).getDownloadURL().then(url => { 
      
      const productData = {  
        Admin: admin,
        productName: title,  
        productPrice: price, 
        productQuantity: quantity,
        productDescription: description, 
        productImage: url,
        productCategory: Category, 
        productTags: Tags
      }
       
       try { 
        axios.post(URL + "/products/addproduct", productData)
        .then(res => { 
         if(res.data.message) {  
           toast("Product Submitted Successfully!")
           window.location.href = "/";
         } 
       });
       } catch (error) {
         console.log(error.error);   
      }
       
    }) 

   }) 

  } 

  return (
    <div className={classes.root}> 

      <ExpansionPanel expanded={expanded} className={classes.mb3}>
        <ExpansionPanelSummary
          onClick={handleExpandedChange}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
       <Typography className={classes.heading}>Upload Product Image</Typography>
        </ExpansionPanelSummary>
        <Divider /> 

        <ExpansionPanelDetails>
          <Grid container>
            <Grid
              item
              container
              justify="space-between"
              className={classes.my1}
            >
            </Grid>
            <Grid item>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <OfflinePinIcon />
                  </ListItemIcon>
                  <span>{imageFile.name}</span>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </ExpansionPanelDetails> 

        <Divider /> 

        <ExpansionPanelActions>
          <Grid container justify="space-between">
            <Button color="secondary" size="small">
              Cancel
            </Button>
            <Button variant="contained" color="primary" size="small" 
             onClick={handleClick}>
              Upload
            </Button> 
            <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{display: 'none'}} 
          />
          </Grid>
        </ExpansionPanelActions> 
      </ExpansionPanel> 

      <ExpansionPanel className={classes.mb3}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <Typography className={classes.heading}>Categories</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          
        <Autocomplete
      size="small"
      onInputChange={handleCategory}
      options={category} 
      value={category.title}
      disableCloseOnSelect
      getOptionLabel={option => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: "100%" }}
      renderInput={params => ( 

        <TextField
          {...params}
          variant="outlined"
          label="Choose"
          placeholder="Choose a category"
        />
      )}
      />
      </ExpansionPanelDetails>
      </ExpansionPanel> 

      <ExpansionPanel className={classes.mb3}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Tags</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
     
        <Autocomplete
      size="small"
      onInputChange={handleTags}
      options={tags} 
      value={tags.title1}
      disableCloseOnSelect
      getOptionLabel={option => option.title1}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title1}
        </React.Fragment>
      )}
      style={{ width: "100%" }}
      renderInput={params => ( 

        <TextField
          {...params}
          variant="outlined"
          label="Choose"
          placeholder="Choose a category"
        />
      )}
      />
        </ExpansionPanelDetails>
      </ExpansionPanel> 

      <Button variant="contained" color="primary" size="small" 
       onClick={handleProductSubmit}>
       Submit Product
     </Button>  
     <ToastContainer />
    </div>
  );
}
