import React, { useEffect, useState } from "react"

const RoomsList = () => {
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
        rooms
    )
}

export default RoomsList