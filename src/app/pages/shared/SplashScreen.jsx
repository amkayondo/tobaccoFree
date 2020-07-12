import React, { Component } from 'react';
import { Image } from 'gestalt';
import loadingSpinner from '../../assets/img/shared/loadingSpinner.svg';
import '../../assets/css/lazyLoader.css';
import AuthContext from '../../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default class SplashScreen extends Component {
  render() {
    return (
      <div className="loaderdiv">
        <div id="loadericon">
        <CircularProgress color="#333" />
        </div>
      </div>
    );
  }
}
