import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Row } from 'react-bootstrap';

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8080/rooms")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setRooms(data)
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
                        <li key={room.id}>{room.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default Rooms;