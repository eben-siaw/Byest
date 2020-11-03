import React from "react";
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/AdminBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
 
import {useSelector} from 'react-redux';

 const http = "http://localhost:5080";

 const useStyles = makeStyles(theme => ({
  my3: {
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

const columns = [
  {
    name: "title",
    label: "Product Name",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "quantity",
    label: "Product Quantity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "categories",
    label: "Categories",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "price",
    label: "Price GH₵",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "date",
    label: "Date",
    options: {
      filter: true,
      sort: true
    }
  }
];



const options = {
  filterType: "checkbox"
};

const AllProductsPage = props => { 
    
  const admin = useSelector(state => state.auth.user._id);

  const [productlist, setProductlist] = useState([]); 
  
  const [productsCount, setProductCount] = useState(0);
  
  const numberOfproducts = () => { 
  
    axios.get(http + `/products/displayProducts/${admin}`) 
    .then(response => { 
      if(response.data.message) { 
        setProductCount(response.data.products.length);
      }
    })
     .catch(error =>  { 
       console.log(error.error);
     })
  }
 
  // display admin products
  const fetchProducts = async () => {  
 
    try {
    return await axios.get(http + `/products/displayProducts/${admin}`) 
      .then(resp => { 
       if(resp.data.message) {  
         console.log(resp.data.products);
         setProductlist(resp.data.products)
       }
      }) 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { 
   fetchProducts(); 
   numberOfproducts();
  }); 
   
  

  const { history } = props;
  const classes = useStyles();

  return ( 
    <OftadehLayout>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push("/admin/add-post")}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Products
          </Button>
        </Grid> 
      </Grid> 

      <OftadehBreadcrumbs path={history} /> 
      
      <MUIDataTable
        title={"Posts List"}
        data={productlist.map(items => { 
          return [ 
           items.productName, 
           items.productPrice, 
           items.productCategory, 
           items.productQuantity
        ]
        })}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  ); 
};

export default AllProductsPage;
