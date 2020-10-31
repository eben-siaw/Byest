import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/AdminBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import AddPostRightPanels from "../../../components/extra/AddPostRightPanels/AddProductRightPanels";
 
 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  my3: {
    margin: "1.3rem 0"
  },
  mb3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  }
}));

const AddPostPage = props => { 

  const { history } = props; 

  const classes = useStyles(); 

  const [product, setProductName] = useState("");   
 
  const [productDesc, setProductDesc] = useState("");
 
  const handleProductChange = (event) => { 
   setProductName(event.target.value);
  } 

  const handleDescription = (event) => { 
   setProductDesc(event.target.value);
  
  }

  return ( 

    <OftadehLayout> 

      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Product
      </Typography> 

      <OftadehBreadcrumbs path={history} /> 

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                label="Add New Product"
                className={classes.mb3} 
                onChange={handleProductChange}
                placeholder="Name of Product"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid> 

            
            <Grid item xs={12}> 

             <TextField  
              variant="outlined"  
              fullWidth 
              placeholder="Product description here..."
              multiline 
              rows={5} 
              rowsMax={10}
              onChange={handleDescription}
             />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <AddPostRightPanels title={product} description={productDesc}/>
          </Grid>
        </Grid>
      </div>
    </OftadehLayout>
  );
};

export default AddPostPage;
