import React from 'react';
import Dom from 'react-dom';
import Router from '../router/router';
import TopBar from './components/topBar'
import '../assets/common/common.css';
Dom.render(
    <div>
        <TopBar/>
        <Router/>
    </div>,
    document.getElementById("app")
);