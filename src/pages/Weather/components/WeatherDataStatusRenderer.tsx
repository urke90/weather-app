import { type AxiosError } from 'axios';
import { type IWeatherData } from '@/types';
import { ErrorMessage, LoadingSpinner, NoDataMessage } from '@/components';
import WeatherContent from './WeatherContent';

// ----------------------------------------------------------------

interface IWeatherDataStatusRendererProps {
  isLoading: boolean;
  isError: boolean;
  isFetchedAfterMount: boolean;
  error: AxiosError | null;
  data: IWeatherData | undefined;
}

const WeatherDataStatusRenderer: React.FC<IWeatherDataStatusRendererProps> = ({
  data,
  error,
  isError,
  isLoading,
  isFetchedAfterMount,
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError && error !== null) {
    return <ErrorMessage statusCode={error.response?.status} />;
  }

  if (!data || Object.keys(data).length === 0) {
    if (!isFetchedAfterMount) return null;
    return <NoDataMessage />;
  }

  return <WeatherContent data={data} />;
};

export default WeatherDataStatusRenderer;
