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
import Applications from './Applications';
import Play from './Play';
import Locations from './Locations' 
import Footer from './Footer';
import { APPLICATIONS} from '../shared/applications';


class Main extends Component {
i
  constructor(props) {
    super(props);

    this.state = {
      applicaitons: APPLICATIONS
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>i
          <Route path="/" element={<Home />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/play" element={<Play />} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;