import { type AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { axios, FETCH_CITY_WEATHER } from '@/api';
import { type IWeatherData } from '@/types';

// ----------------------------------------------------------------

const fetchCityWeather = async (cityName = '') => {
  const url = `?q=${encodeURIComponent(cityName)}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}&units=metric`;

  const { data } = await axios.get(url);
  return data;
};

export const useFetchCityWeather = (searchQuery: string) => {
  return useQuery<IWeatherData, AxiosError>({
    queryKey: [FETCH_CITY_WEATHER, searchQuery],
    queryFn: () => fetchCityWeather(searchQuery),
    enabled: !!searchQuery,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
