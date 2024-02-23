import { useQuery } from '@tanstack/react-query';
import { fetchWeatherForCity, FETCH_CITY_WEATHER } from '@/api';

// ----------------------------------------------------------------

export const useFetchWeatherForCity = (searchQuery: string) => {
  const { isLoading, data, error } = useQuery({
    queryKey: [FETCH_CITY_WEATHER, searchQuery],
    queryFn: () => fetchWeatherForCity(searchQuery),
  });

  return {
    isLoading,
    error,
    data,
  };
};
