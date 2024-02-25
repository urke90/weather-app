import { useQuery } from '@tanstack/react-query';
import { axios, FETCH_CITY_WEATHER } from '@/api';

// ----------------------------------------------------------------

const fetchCityWeather = async (cityName = '') => {
  const url = `?q=${encodeURIComponent(cityName)}&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`;

  const { data } = await axios.get(url);
  return data;
  // try {
  // } catch (error) {
  //   console.log('AAAAAAAAAA', error);

  //   throw error;
  // }
  // console.log('response', response);

  // return await axios.get(url);
};

export const useFetchCityWeather = (searchQuery: string) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [FETCH_CITY_WEATHER, searchQuery],
    queryFn: () => fetchCityWeather(searchQuery),
    enabled: !!searchQuery,
  });

  return {
    isLoading,
    error,
    data,
  };
};
