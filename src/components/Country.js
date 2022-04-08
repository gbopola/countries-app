import {
  CountryWrapper,
  Flag,
  CountryInfo,
  CountryInfoNumbers,
  CountryInfoContainer,
} from '../styles/CountryStyles';
function Country({ name, population, region, capital, flag }) {
  return (
    <CountryWrapper>
      <Flag flag={flag} />
      <CountryInfoContainer>
        <CountryInfo>{name}</CountryInfo>
        <CountryInfoNumbers>
          <p>
            <span>Population:</span> {population.toLocaleString()}
          </p>
          <p>
            <span>Region:</span> {region === '' ? 'N/A' : region}
          </p>
          <p>
            <span>Capital:</span> {capital === '' ? 'N/A' : capital}
          </p>
        </CountryInfoNumbers>
      </CountryInfoContainer>
    </CountryWrapper>
  );
}

export default Country;
