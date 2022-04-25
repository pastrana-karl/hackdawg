import React from 'react';
import { Link } from 'react-router-dom';
import './Dummy.css';

function Dummy() {
    return (
        <>
            <div className="greetings">
                <h3>You're logged in!</h3>
                <Link className="back-link" to="/">Back</Link>
            </div>
        </>
    )
}

export default Dummy