import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

export default function LandingPage() {

    return (
        <div className="landing-page">
            <div className="centerStack">
                <h1 className="titleMain"> </h1>
                <Link to='/home'>
                    <button className="btn">Come in!</button>
                </Link>
            </div>
        </div>
    )
};