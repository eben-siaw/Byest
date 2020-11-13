import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../web/header';
import Footer from '../web/footer';
import AdVideos from '../web/videos-ads/AdVideos';

export default class VideoPage extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header/>
            <Switch>
             <Route path='/videos' component={AdVideos} />
            </Switch>
            <Footer/>
          </div> 
        </main>
      );
    }
} 









