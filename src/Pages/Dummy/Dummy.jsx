import React from 'react';
import { Link } from 'react-router-dom';
import './Dummy.css';

function Dummy() {
    return (
        <>
            <div className="greetings">
                {/* Welcome message if the user is signed in */}
                <h3>You're logged in!</h3>

                {/* Back button to go back on the login page */}
                <Link className="back-link" to="/">Back</Link>
            </div>
        </>
    )
}

export default Dummy