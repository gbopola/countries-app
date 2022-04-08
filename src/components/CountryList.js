import { CountryListStyles, LoaderWrapper } from '../styles/CountryListStyles';
import Country from './Country';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';

function CountryList({ country, currCountry, regions, setCountries }) {
  const handleChange = (val) => {
    if (country) {
      let filteredCountries = [];

      if (regions.includes(val)) {
        currCountry.map((c) => c.region.includes(val) && filteredCountries.push(c));
        setCountries(filteredCountries);
      } else if (val === '') {
        setCountries(currCountry);
      } else {
        currCountry.map(
          (c) =>
            c.name.common.toLowerCase().includes(val) && filteredCountries.push(c)
        );
        setCountries(filteredCountries);
      }
    }
  };

  return (
    <div>
      <Header
        changeRegion={handleChange}
        filterRegion={handleChange}
        regions={regions}
      />
      {!country && (
        <LoaderWrapper>
          <BeatLoader color="#4A90E2" size={20} />
        </LoaderWrapper>
      )}
      <CountryListStyles>
        {country &&
          country.map((c) => (
            <Link
              className="country-links"
              to={`country/${c.name.common.toLowerCase()}`}
              key={c.name.common}
            >
              <Country
                key={c.name.common}
                name={c.name.common}
                population={c.population}
                capital={c.capital}
                region={c.region}
                flag={c.flags.png}
              />
            </Link>
          ))}
      </CountryListStyles>
    </div>
  );
}

export default CountryList;
