import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

class GoogleMapPlace extends React.Component {
  static propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    isMarkerShown: PropTypes.bool,
  }

  static defaultProps = {
    isMarkerShown: false,
  }

  render() {
    const { lat, lng, isMarkerShown } = this.props;
    return (
      <GoogleMap
        defaultZoom={11}
        center={{ lat, lng }}
        defaultCenter={{ lat, lng }}
        onClick={this.hanleClick}
      >
        {isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    )
  }
}
// const GoogleMapPlace = withGoogleMap(({ lat, lng, isMarkerShown }) => (
//   <GoogleMap
//     defaultZoom={11}
//     center={{ lat, lng }}
//     defaultCenter={{ lat, lng }}
//     onClick={this.hanleClick}
//   >
//     {isMarkerShown && <Marker position={{ lat, lng }} />}
//   </GoogleMap>
// ));

GoogleMapPlace.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool,
};

GoogleMapPlace.defaultProps = {
  isMarkerShown: false,
};

export default withGoogleMap(GoogleMapPlace);
