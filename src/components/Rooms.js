import React from "react";
import {Link, NavLink} from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

const Rooms = (props) => {

    const rooms = props.rooms.map((room) => {
        return (
            <Row> 
               <NavLink as={Link} to={`/rooms/${room.id}`}><h4>{room.name} {room.description}</h4></NavLink>
            </Row>
        );
    });

    return (
        <Container>
            {rooms}
        </Container>
    );
}

/**export function RoomID(){
    const { courseid } = useParams()
    return (
      <div>
        <h4>URL Param is; {courseid} </h4>
        <button className="btn btn-warning" >Price </button>
      </div>
    );
*/
export default Rooms;