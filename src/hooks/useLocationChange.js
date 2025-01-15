import { useLocation } from "react-router-dom";
import React from "react";

export default function useLocationChange(callback) {
  const location = useLocation();
  // Store the previous location
  const prevLocation = usePrevious(location);

  React.useEffect(() => {
    if (prevLocation?.pathname !== location.pathname) {
      callback();
    }
  }, [location, prevLocation, callback]);
}
// value is the location
// allows us to get any previous values between renders
function usePrevious(value) {
  // Store previous value
  const ref = React.useRef();
  // Store a reference to the previous location
  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
