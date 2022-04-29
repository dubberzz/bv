import {React, Component} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import leafGreen from './assets/leaf-green.png';
import './App.css';
import { Container, Button } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import 'leaflet/dist/leaflet.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

class Trasee extends Component{

    state = {
    bv: {
        lat: 45.66640,
        lng: 25.60600,
      },
    bc:{
      lat: 46.56583,
      lng: 27.00121,
    }
    }

    grenIcon = L.icon({
        iconUrl: leafGreen,
        iconSize:     [70], 
        iconAnchor:   [30, 30], 
        popupAnchor:  [-5, -20]
      });

    render() {

    const positionbv = [45.66640, 25.60600];
    const positionbc = ['46.56583', '27.00121'];

    var traseu = {"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "LineString", "coordinates": [[26.89943495, 46.56299771], [26.90985362, 46.56508784], [26.90935187, 46.56821275], [26.9104144, 46.56918671], [26.9108276, 46.569207], [26.91188497, 46.56541223], [26.91380588, 46.56570213], [26.91382931, 46.56546055], [26.91420412, 46.56554108], [26.91497717, 46.56499348], [26.91640614, 46.56454251], [26.91689809, 46.56465525], [26.9225437, 46.56327011], [26.92310592, 46.56304462], [26.92397267, 46.56318958], [26.92404295, 46.56663626], [26.92350416, 46.56890708], [26.92268426, 46.57156431]]}, "id": "3185362b-28ee-4a93-8d13-7c4f165f20cc", "properties": {"name": "traseu1"}}]}

    return (
      <Container>
        <Link to='/'>
            <Button
                to={`/`}
                variant="outlined"
            ><ArrowBackIcon fontSize="small" />Back</Button>
        </Link>

      <div className='container'>
        <MapContainer className="map" center={positionbv} zoom={8}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        
        <Marker position={positionbv} icon={this.grenIcon}>
            <Popup>
            <Link to='/bacau'>Brasov</Link>
            </Popup>
          </Marker>

        <Marker position={positionbc} icon={this.grenIcon}>
          <Popup>
              <Link to='/bacau'>Bacau</Link>
          </Popup>
        </Marker>
        </MapContainer>
      </div>

    </Container>
  )
  }
}

export default Trasee;