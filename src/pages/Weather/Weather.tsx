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
  const searchCityInputRef = useInputFocus();
  const { data, error, isLoading, isError, isFetchedAfterMount } =
    useFetchCityWeather(searchQuery);

  const handleSearchCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchCityInputRef.current?.value.trim()) {
      const query = searchCityInputRef.current.value.trim();
      setSearchQuery(query);
    }
  };

  console.log('searchCityInputRef', searchCityInputRef.current?.value);

  return (
    <div className="weather">
      <h2 className="weather__title">Search for City weather</h2>
      <h5 className="weather__subtitle">
        Enter city name below to get its current weather conditions
      </h5>
      <div className="weather__search-form">
        <SearchForm onSubmit={handleSearchCityWeather}>
          <Input
            type="search"
            name="city"
            placeholder="Enter City Name"
            ref={searchCityInputRef}
          />
          <Button type="submit">
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
