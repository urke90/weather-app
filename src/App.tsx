import { Header } from '@/components';

import { HomePage } from '@/pages';

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
  // const { data, isLoading, error } = useFetchWeatherForCity('london');

  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <HomePage />
      </main>
    </div>
  );
};

/**
 * bg-color - dark:  #11191f;
 * btn blue bg color: 1095c1
 * darkset gray: #bbc6ce
 * mid-gray: #d5dce2
 * light-gray: #e1e6eb
 * invalid red : #b71c1c
 * form-el-border-color: #374956
 */

export default App;
