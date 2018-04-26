import React from 'react';

function WithLoading(Component) {
  return function WihLoadingComponent({ ...props }) {
    if (props.loaded) return (<Component {...props} />);
    return (
      <div className="text-center w100">
        <div className="lds-hourglass" />
      </div>
    );
  };
}

export default WithLoading;
