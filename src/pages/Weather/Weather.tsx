import { useState } from 'react';
import { TbCloudSearch } from 'react-icons/tb';
// hooks
import { useInputFocus, useFetchCityWeather } from '@/hooks';
// components
import { Input, Button, SearchForm, TextIcon } from '@/components';
import WeatherDataStatusRenderer from './components/WeatherDataStatusRenderer';

import './Weather.scss';

// ----------------------------------------------------------------

const Weather: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const searchCityInputRef = useInputFocus();
  const { data, error, isLoading, isError, isFetchedAfterMount } =
    useFetchCityWeather(searchQuery);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
    }
  };

  const isBtnDisabled = !inputValue.trim() || isLoading;

  return (
    <div className="weather">
      <h2 className="weather__title">WeatherCheck: Choose Your City</h2>
      <h5 className="weather__subtitle">
        Enter city name below to get its current weather conditions
      </h5>
      <div className="weather__search-form">
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="search"
            name="city"
            placeholder="Enter City Name"
            ref={searchCityInputRef}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit" disabled={isBtnDisabled} variant="secondary">
            <TextIcon text="Search" icon={<TbCloudSearch />} />
          </Button>
        </SearchForm>
      </div>

      <div className="weather__content">
        <WeatherDataStatusRenderer
          isLoading={isLoading}
          isError={isError}
          isFetchedAfterMount={isFetchedAfterMount}
          error={error}
          data={data}
        />
      </div>
    </div>
  );
};

export default Weather;
