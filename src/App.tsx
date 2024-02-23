import { useFetchWeatherForCity } from '@/hooks';

import './App.scss';

// ----------------------------------------------------------------

/**
 * https://openweathermap.org/guide ---> start with API
 * use exalidraw to draw app structure
 * check if chat bot can create some UI
 * examine SCSS
 * create folder structure
 */

const App: React.FC = () => {
  const { data, isLoading, error } = useFetchWeatherForCity('london');

  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);

  return (
    <div>
      <h1>Weather Forecast</h1>
    </div>
  );
};

export default App;
