import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

const GoogleMapPlace = withGoogleMap(({ lat, lng, isMarkerShown }) => {
  console.log('render', 'GoogleMapPlace', lat, lng);
  return (
  <GoogleMap defaultZoom={11} center={{ lat, lng }} defaultCenter={{ lat, lng }}>
    {isMarkerShown && <Marker position={{ lat, lng }} />}
  </GoogleMap>
  
)});

GoogleMapPlace.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  isMarkerShown: PropTypes.bool,
};

GoogleMapPlace.defaultProps = {
  isMarkerShown: false,
};

export default GoogleMapPlace;
