import { Input, Button, SearchForm } from '@/components';
import { TbCloudSearch } from 'react-icons/tb';

import './Home.scss';

// ----------------------------------------------------------------

const Home: React.FC = () => {
  return (
    <div className="home">
      <h2 className="home__title">Search for City weather</h2>
      <h5 className="home__subtitle">
        Enter a city below to get its current weather conditions
      </h5>
      <div className="home__search-form">
        {/* <SearchForm /> */}
        {/* <Input type="text" placeholder="Enter City Name" />
        <Button>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              fontSize: '18px',
            }}
          >
            Search <TbCloudSearch />
          </div>
        </Button> */}
      </div>
      <div>THIS WILL BE FOR DATA</div>
    </div>
  );
};

export default Home;
