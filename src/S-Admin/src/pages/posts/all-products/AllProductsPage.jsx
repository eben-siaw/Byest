import React from "react";
import OftadehLayout from "../../../components/AdminLayout/OftadehLayout";
import OftadehBreadcrumbs from "../../../components/AdminBreadcrumbs/OftadehBreadcrumbs";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";
import axios from "axios";
 
import {useSelector} from 'react-redux';

 const http = "http://localhost/5000";

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
    label: "Title",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "author",
    label: "Author",
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
    name: "tags",
    label: "Tags",
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

const data = [
  {
    title: "Learn Javascript",
    author: "Mohammad Oftadeh",
    categories: "javascript",
    tags: "web, javascript",
    date: "12-12-2020"
  },
  {
    title: "React.js with Material UI",
    author: "John Doe",
    categories: "react, material-ui",
    tags: "react, material ui",
    date: "12-12-2020"
  }
];

const options = {
  filterType: "checkbox"
};

const AllProductsPage = props => { 
   
  const [productlist, setProductlist] = useState([]); 
  
  const fetchProducts = () => {  

    axios.get(http + "/products/fetchProducts").then(resp => { 
     if(resp.data.message) { 
       setProductlist(resp.data.product)
     }
    }) 
  }

  useEffect(() => { 
   fetchProducts();
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
            onClick={() => history.push("/admin/pages/posts/add-post")}
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
        data={data}
        columns={columns}
        options={options}
      />
    </OftadehLayout>
  ); 
};

export default AllProductsPage;
