import { WeatherPage } from '@/pages';
import { Header } from '@/components';

import './App.scss';

// ----------------------------------------------------------------

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <WeatherPage />
      </main>
    </div>
  );
};

export default App;
