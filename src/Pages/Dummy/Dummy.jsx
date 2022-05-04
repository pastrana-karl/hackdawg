import React from 'react';
import { Link } from 'react-router-dom';
import './Dummy.css';

function Dummy() {
    return (
        <>
        
            <div className="greetings">
                {/* Welcome message if the user is signed in */}
                {/* <div className="bg"></div> */}
                <div className="bgstyle"></div>
                <div className="container">
                    <h1>ENTER CODE</h1>
                </div>
                {/* Back button to go back on the login page */}
                <Link className="back-link" to="/">Back</Link>
            </div>
            
        </>
    )
}

export default Dummy