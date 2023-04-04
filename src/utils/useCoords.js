import { useState, useEffect, useCallback, useRef } from 'react';

const useCoords = (watch = false) => {
  const [coordinates, setCoordinates] = useState([-0.28493726, 36.070354]);
  const watchIdRef = useRef(null);

  const handleSuccess = useCallback((position) => {
    setCoordinates([position.coords.latitude, position.coords.longitude]);
  }, []);

  const handleError = useCallback((error) => {
    console.error(error);
  }, []);

  useEffect(() => {
    if (window.navigator.geolocation) {
      if (watch) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      } else {
        watchIdRef.current = navigator.geolocation.watchPosition(handleSuccess, handleError);
      }
    } else {
      alert("Geolocation is not on or supported by this browser.");
    }

    return () => {
      navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, [watch, handleSuccess, handleError]);

  return coordinates;
};

export default useCoords;