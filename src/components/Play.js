// Pløaying with code
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Row } from 'react-bootstrap';
import { APPLICATIONS } from '../shared/applications'; // test data when real fetch fails, and that worked

const Play = () => {

    return (

        <div className="container">
            <table class="table table">
                <thread>
                    <tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <th>Ola</th>
                        <th>Oppidalen</th>
                        <th>33</th>
                    </tr>
                    <tr>
                        <th>Eva</th>
                        <th>Oppidalen</th>
                        <th>16</th>
                    </tr>
                </thread>
            </table>
        </div>
    )
}

export default Play;