import React, { Component } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Rooms from './Rooms';
import Menu from './Menu'
import Footer from './Footer';
import { ROOMS } from '../shared/rooms';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms: ROOMS
    }
  }
  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms rooms={ROOMS}/>} >
          </Route>
          <Route path="/menu" element={<Menu />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;