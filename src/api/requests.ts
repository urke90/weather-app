import { axios } from './axios';

// ----------------------------------------------------------------

export const fetchWeatherForCity = async (cityName = '') => {
  const url = `?q=${encodeURIComponent(cityName)}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

  return await axios.get(url);
};
