import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../actions';

const Weather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('Hà Nội'));
  }, [dispatch]);

  return (
    <div>
      {weatherData.loading ? <p>Đang tải...</p> : <p>{weatherData.data.name}: {weatherData.data.main.temp}°C</p>}
    </div>
  );
};

export default Weather;