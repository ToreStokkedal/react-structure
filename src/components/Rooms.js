import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Row } from 'react-bootstrap';
import { ROOMS } from '../shared/rooms'; // test data when real fetch fails, and that worked

const Rooms = () => { 

    const [rooms, setRooms] = useState([])
    const fetchData = () => {
        console.log("In fecthdata in Rooms.js");
        fetch("http://localhost:8080/rooms")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setRooms(data)
            })
            .catch(err => {
                // IF servce is not available, return static test data
                setRooms(ROOMS); 
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        
        <div className="container">
            {rooms.length > 0 && (
                <ul>
                    {rooms.map(room => (
                        <li key={room.id}>{room.name} Beskrivelse {room.decription} kapasitet {room.maxPeople} personer</li>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default Rooms;