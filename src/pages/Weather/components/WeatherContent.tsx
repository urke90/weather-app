import { MdSunnySnowing } from 'react-icons/md';

import { type IWeatherData } from '@/types';
import {
  formatTemperature,
  formatVisibility,
  formatWind,
  convertDegreesToDirection,
} from '@/utils';

import WeatherItem from './WeatherItem';

import './WeatherContent.scss';

// ----------------------------------------------------------------

interface IWeatherContentProps {
  data: IWeatherData;
}

const WeatherContent: React.FC<IWeatherContentProps> = ({ data }) => {
  const { name, sys, weather, main, visibility, wind, clouds } = data || {};

  // taking [0] because it is primary weather
  const { description, icon } = weather?.[0] || {};
  const { temp, feels_like, pressure, humidity, temp_min, temp_max } =
    main || {};
  const { speed, gust, deg } = wind || {};

  return (
    <div className="weather-content">
      <h2 className="weather-content__title">
        <span className="weather-content__title-pre">Current Weather in</span>{' '}
        {name}, {sys?.country}
      </h2>
      <div className="weather-content__body">
        <div className="weather-content__body-details">
          <div className="weather-content__temperature">
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt={description}
            />
            <span className="weather-content__temperature-value">
              {formatTemperature(temp)}
            </span>
            <span className="weather-content__details-description">
              {description} ~ Real Feel {formatTemperature(feels_like)}
            </span>
          </div>
          <div className="weather-content__item-wrapper">
            <WeatherItem
              text="Min Temperature"
              dataProp={formatTemperature(temp_min)}
            />
            <WeatherItem
              text="Max Temperature"
              dataProp={formatTemperature(temp_max)}
            />
          </div>
          <div className="weather-content__item-wrapper">
            <WeatherItem text="Clodudness" dataProp={`${clouds.all}%`} />
            <WeatherItem
              text="Visibility"
              dataProp={formatVisibility(visibility)}
            />

            <WeatherItem text="Pressure" dataProp={`${pressure} hPa`} />
            <WeatherItem text="Humidity" dataProp={`${humidity}%`} />
            <WeatherItem
              text="Wind"
              dataProp={`${formatWind(speed)} ~ ${convertDegreesToDirection(deg)}`}
            />
            <WeatherItem text="Wind gust" dataProp={formatWind(gust)} />
          </div>
        </div>
        <div className="weather-content__logo">
          <MdSunnySnowing />
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
