import React, { useState, useRef } from "react";
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/AdminBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, makeStyles, Button, TextField, FormControl, InputLabel, Input, InputAdornment } from "@material-ui/core";
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

  const [price, setProductPrice] = useState(""); 

  const [quantity, setQuantity] = useState("");
 
  const handleProductChange = (event) => { 
   setProductName(event.target.value);
  } 

  const handleDescription = (event) => { 
   setProductDesc(event.target.value);
  
  }
  
  const handlePrice = (event) => { 
    setProductPrice(event.target.value)
  }
  
  const handleQuantity = (event) => { 
    setQuantity(event.target.value);
  } 

  const handleLogout = () => { 
    const token = localStorage.removeItem("admintoken"); 
    window.location = "/";
  }

  return ( 

    <OftadehLayout> 

      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Product
      </Typography> 
      <Button variant="outlined" color="secondary" size="medium" onClick={() => handleLogout()}> Logout </Button> 
  {/*<OftadehBreadcrumbs path={history} /> */}

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={8}>
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                className={classes.mb3} 
                onChange={handleProductChange}
                placeholder="Name of Product" 
                value={product}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid> 
     
         <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
          <Input
            id="standard-adornment-amount"
            value={price}
            onChange={handlePrice}
            startAdornment={<InputAdornment position="start">GH₵</InputAdornment>}
          />
        </FormControl>
            
            <TextField
            id="standard-full-width"
            className={classes.mb3} 
            onChange={handleQuantity}
            placeholder="Product Quantity" 
            value={quantity}
            fullWidth
            margin="normal"
            InputLabelProps={{
            shrink: true
            }}
              />

            <Grid item xs={12}> 

             <TextField  
              variant="outlined"  
              fullWidth 
              placeholder="Product description here..."
              multiline  
              value={productDesc}
              rows={5} 
              rowsMax={10}
              onChange={handleDescription}
             />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
        <AddPostRightPanels title={product} description={productDesc} price={price} quantity={quantity}/>
          </Grid>
        </Grid>
      </div>
    </OftadehLayout>
  );
};

export default AddPostPage;
