// Interface(s) from response we get from https://openweathermap.org/current ====> for current weather

export interface IWeatherData {
  coord: ICoordinates;
  weather: IWeather[];
  base: string;
  main: IMainWeather;
  visibility: number;
  wind: IWind;
  rain?: IRain;
  snow?: ISnow;
  clouds: IClouds;
  dt: number;
  sys: ISystem;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface ICoordinates {
  lon: number;
  lat: number;
}

interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface IMainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

interface IRain {
  '1h': number;
  '3h': number;
}
interface ISnow {
  '1h': number;
  '3h': number;
}

interface IClouds {
  all: number;
}

interface ISystem {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
