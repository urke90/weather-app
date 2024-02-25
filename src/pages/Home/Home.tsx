import { useState } from 'react';
import { TbCloudSearch } from 'react-icons/tb';
// hooks
import { useInputFocus, useFetchCityWeather } from '@/hooks';
// components
import { Input, Button, SearchForm, TextIcon } from '@/components';

import './Home.scss';

// ----------------------------------------------------------------

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchCityInputRef = useInputFocus();
  // const { data, error, isLoading } = useFetchCityWeather(searchQuery);

  const handleSearchCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchCityInputRef.current?.value.trim()) {
      const query = searchCityInputRef.current.value.trim();
      setSearchQuery(query);
    }
  };

  return (
    <div className="home">
      <h2 className="home__title">Search for City weather</h2>
      <h5 className="home__subtitle">
        Enter a city below to get its current weather conditions
      </h5>
      <div className="home__search-form">
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
      <div>THIS WILL BE FOR DATA</div>
    </div>
  );
};

export default Home;
