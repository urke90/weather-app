import { isValidWeatherProp } from '@/utils';

import './WeatherItem.scss';

// ----------------------------------------------------------------

interface IWeatherItemProps {
  text: React.ReactNode;
  dataProp: string | number | undefined | null;
}

const WeatherItem: React.FC<IWeatherItemProps> = ({ text, dataProp }) => {
  if (!isValidWeatherProp(dataProp)) return null;

  return (
    <div className="weather-item">
      <p className="weather-item__text">
        {text} ~ {dataProp}
      </p>
    </div>
  );
};

export default WeatherItem;
