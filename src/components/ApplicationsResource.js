import React, { useEffect, useState } from "react"

const ApppliList = () => {
    const [applications, setApplications] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8080/rooms")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setApplicaitons(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        applications
    )
}

export default AppplicationsList