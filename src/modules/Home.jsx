import React from 'react';
import axios from 'axios';

import Layout from '../Layout';
import Card from '../components/Card';
import Temperature from '../components/Temperature';
import WithLoading from '../components/WithLoading';
import GeolocInput from '../components/GeolocInput';
import GoogleMapPlace from '../components/Googlemap';

const TemperatureLoading = WithLoading(Temperature);
axios.defaults.headers.common['Target-URL'] = 'https://api.darksky.net';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
    this.onGeolocSelect = this.onGeolocSelect.bind(this);
  }


  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`http://proxy.guillemoto.io/forecast/e7521113425fc52bcc27be9e16a610d4/${position.coords.latitude},${position.coords.longitude}?lang=fr&units=si`).then((resp) => {
          this.setState({
            temperature: resp.data.currently.temperature,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          const geocoder = new google.maps.Geocoder;
          geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude } }, ((results) => {
            console.log(results);
            if (results[0]) {
              this.setState({
                address: results[0].formatted_address,
              });
            }
          }));
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  
  onGeolocSelect({ lat, lng, address }) {
    this.setState({
      lat,
      lng,
      address,
    });
    this.refreshPosition();
  }

  refreshPosition() {
    axios.get(`http://proxy.guillemoto.io/forecast/e7521113425fc52bcc27be9e16a610d4/${this.state.lat},${this.state.lng}?lang=fr&units=si`).then((resp) => {
      this.setState({
        temperature: resp.data.currently.temperature,
      });
    });
  }

  render() {
    return (
      <Layout>
        <div>
          <GeolocInput onSelect={this.onGeolocSelect} />
        </div>
        <div className="home_cards">
          <Card
            title="Place"
            subtitle={this.state.address}
          >
            {this.state.lat &&
              <GoogleMapPlace
                lat={this.state.lat}
                lng={this.state.lng}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEgAsSMNY2rPvZC9ZhvdJnR0SzsrjUYe4&libraries=places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '300px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            }
          </Card>
          <Card
            title="Température"
            subtitle="Actuellement"
          >
            <TemperatureLoading
              loaded={this.state.temperature}
              temperature={this.state.temperature}
            />
          </Card>
        </div>
      </Layout>
    );
  }
}
