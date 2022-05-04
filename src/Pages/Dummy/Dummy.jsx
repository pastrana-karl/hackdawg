import React from 'react';
import { Link } from 'react-router-dom';
import './Dummy.css';

function Dummy() {
    return (
        <>
            <div className="greatings">
                <div className="bgstyle"></div>
                {/* Welcome message if the user is signed in */}
                <div className="container">
                    <h1>ENTER CODE</h1>
                </div>
                {/* Back button to go back on the login page */}
                <Link className="dummy-back-link" to="/hackdawg">Back</Link>
            </div>

        </>
    )
}

export default Dummy