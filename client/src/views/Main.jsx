import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default function LandingPage() {

    return (
        
        <div className="landing-page">
            <h1 className="titleMain"> </h1>
            <Link to='/home'>
                <button className="main_btn">Come in!</button>
            </Link>
        </div>
    )
};