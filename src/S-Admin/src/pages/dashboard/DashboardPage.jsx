import React from "react";
import OftadehLayout from "../../components/AdminLayout/OftadehLayout";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import OftadehBreadcrumbs from "../../components/AdminBreadcrumbs/OftadehBreadcrumbs";
import OftadehChart from "../../components/AdminChart/OftadehChart";
import OftadehBarChart from "../../components/AdminChart/OftadehBarChart";
import OftadehPieChart from "../../components/AdminChart/OftadehPieChart";
import SimpleTable from "./components/SimpleTable";
import clsx from "clsx";
import ListIcon from '@material-ui/icons/List';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((them) => ({
  paddingPaper: {
    padding: "10px 5px 5px 10px",
  },
  mt: {
    marginTop: 13,
  },
  titlePaper: {
    marginBottom: "16px",
  },
  visitorChart: {
    // height: "150px"
  },
})); 


const DashboardPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <OftadehLayout>
      <h1>Dashboard</h1>
      <ListIcon
        title="star repo"
        width="75px"
        height="30px"
        style={{ marginBottom: "20px" }}
      />
    
      <br/>
      <Grid container spacing={2}>
        <Grid className={classes.visitorChart} item xs={12}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Visitors
            </Typography>
            <OftadehChart />
          </Paper>
        </Grid>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Analysis
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <OftadehBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Customers
            </Typography>
            <OftadehPieChart />
          </Paper>
        </Grid>
      </Grid>
    </OftadehLayout>
  );
};

export default DashboardPage;
