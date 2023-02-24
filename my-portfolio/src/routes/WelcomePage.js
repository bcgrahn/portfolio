
import './Page.css';
// import * as React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div class = "bg">
              <Link to="/details">
            <div class = "glassCard center">
                <div class = "center"><div class = "heading"><strong>Welcome to my portfolio</strong></div>
                <h1>Click to continue</h1></div>
            </div>
            </Link>
        </div>
    )
}
export default WelcomePage;
