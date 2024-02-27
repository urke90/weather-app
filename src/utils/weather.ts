type TemperatureUnits = 'celsius' | 'kelvin' | 'fahrenheit';

export const formatTemperature = (
  value: number,
  unit: TemperatureUnits = 'celsius'
) => {
  if (value === undefined || value === null) return null;
  let convertedTemp = value;

  if (unit === 'fahrenheit') {
    convertedTemp = (value * 9) / 5 + 32; // Convert Celsius to Fahrenheit if needed
  } else if (unit === 'kelvin') {
    convertedTemp = value + 273.15; // Convert Celsius to Kelvin if needed
  }
  return `${Math.round(convertedTemp)}°${unit.charAt(0).toUpperCase()}`;
};

type VisibilityUnits = 'km' | 'mi';

export const formatVisibility = (
  value: number,
  unit: VisibilityUnits = 'km'
) => {
  if (value === undefined || value === null) return null;

  const convertedValue = unit === 'mi' ? value / 1609.34 : value / 1000;

  return `${convertedValue.toFixed(2)}${unit}`;
};

// meters/sec || miles/hour
type WindUnits = 'm/s' | 'm/h';

export const formatWind = (value: number, unit: WindUnits = 'm/s') => {
  if (value === undefined || value === null) return null;
  const convertedValue = unit === 'm/h' ? value * 2.237 : value;
  return `${convertedValue.toFixed(2)} ${unit}`;
};

export const convertDegreesToDirection = (value: number) => {
  if (value === undefined || value === null) return null;
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const index = Math.floor(((value + 22.5) % 360) / 45);
  return directions[index];
};

// created to check data property since it can be number 0 so it would result in faulsy value
export const isValidWeatherProp = (
  value: string | number | null | undefined
) => {
  if (value === null || value === undefined) return false;

  if (typeof value === 'string') {
    return Number.isFinite(parseFloat(value));
  }

  return Number.isFinite(value);
};
