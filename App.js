import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
// import './NavBar1.css';
// import './NavBar2.css';
// import './Grid.css';
// import '/Card.css';


import NavBar from './Components/NavBar';
import NavBarCanvas from './Components/NavBarCanvas';
import Grid from './Components/Grid';
import CardGroup  from './Components/CardGroup';
import CarouselCardGroup from "./Components/CarouselCardGroup";
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="content">
      {/* <NavBar />
      <NavBarCanvas />
      <Grid /> */}
      <CardGroup />
      <CarouselCardGroup />
    </div>
  );
}

export default App;