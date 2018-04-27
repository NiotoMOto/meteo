import React from 'react';
import axios from 'axios';

import Layout from './Layout';
import Card from './components/Card';
import Temperature from './components/Temperature';
import WithLoading from './components/WithLoading';

const TemperatureLoading = WithLoading(Temperature);
axios.defaults.headers.common['Target-URL'] = 'https://api.darksky.net';

export default class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {};
}


  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`http://proxy.guillemoto.io/forecast/e7521113425fc52bcc27be9e16a610d4/${position.coords.latitude},${position.coords.longitude}?lang=fr&units=si`).then((resp) => {
          this.setState({
            temperature: resp.data.currently.temperature,
          });
        });
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  render() {
    return (
      <Layout>
        <Card
          title="Température"
          subtitle="Actuellement"
        >
          <TemperatureLoading
            loaded={this.state.temperature}
            temperature={this.state.temperature}
          />
        </Card>
      </Layout>
    );
  }
}
