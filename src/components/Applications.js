import React, { useEffect, useState } from "react";
import { APPLICATIONS } from "../shared/applications";

const Applications = () => { 
     const applications = APPLICATIONS

    /**const [applications, setApplications] = useState([])
     const fetchData = () => {
        console.log("In fecthdata in Applications.js");
        fetch("http://localhost:8080/applications")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setApplications(data)
            })
            .catch(err => {
                // IF servce is not available, return static test data
                setApplications(APPLICATIONS); 
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
*/

    return (
        
        <div>
            The list of applicatons
            <table class= "table table-striped">    
            
            <tr>
                <th>Navn</th>               
                <th>Beskrivelse</th>
                <th>Internal</th>
                <th>Hosting</th>
                </tr>
             {applications.length > 0 && ( 
                <>
                    {applications.map(application => (
                        <tr>
                        <td>{application.name} </td> 
                        <td>{application.description} </td>
                        <td>{application.internal} </td>
                        <td>{application.hostingprovider} </td>
                        </tr>
                    ))}
                </>
            )} 
            </table>
        </div>
    )
}


export default Applications;