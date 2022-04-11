import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  CountryDetailStyles,
  ImgContainer,
  CountryInfo,
  CountryInfoDetails,
  CountryDetailsWrapper,
  CountryInfoDetailsInner,
  CountryBorders,
  LinkWrapper,
  Button,
  ButtonWrapper,
} from '../styles/CountryDetailStyles';

function CountryDetail({ match, allCountries }) {
  const [country, setCountry] = useState(null);
  const matchingCountry = match.params.name;

  useEffect(() => {
    async function getCountry() {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${matchingCountry}?fullText=true`
      );
      setCountry(response.data);
    }

    getCountry();
  }, [matchingCountry]);

  // get borders full name using alpha3code
  const getBorderCountryName = (country, border) => {
    const matchingCountry =
      country &&
      country.find((country) => {
        return (
          country.cioc === border ||
          country.cca2 === border ||
          country.cca3 === border
        );
      });

    return matchingCountry.name.common;
  };

  // get native name
  const getNativeName = (val) => {
    let language = Object.keys(val.name.nativeName);
    return val.name.nativeName[language[0]].official;
  };

  // get currency
  const getCurrency = (val) => {
    let currency = Object.keys(val.currencies);
    return val.currencies[currency[0]].name;
  };

  // get languages
  const getLanguages = (val) => {
    let language = Object.keys(val.languages);
    return language.map((lang) => val.languages[lang]).join(', ');
  };

  return (
    <CountryDetailStyles>
      <Link className="country-links" to={'/'}>
        <LinkWrapper>
          <p>
            <i className="fas fa-arrow-left"></i>Go Back
          </p>
        </LinkWrapper>
      </Link>
      {country &&
        country.map((i) => {
          return (
            <CountryDetailsWrapper>
              <ImgContainer src={i.flags.svg} />
              <CountryInfo>
                <h1>{i.name.common}</h1>
                <CountryInfoDetails>
                  <CountryInfoDetailsInner>
                    <p>
                      <span>Native Name: </span>
                      {getNativeName(i)}
                    </p>
                    <p>
                      <span>Population: </span>
                      {i.population.toLocaleString()}
                    </p>
                    <p>
                      <span>Region: </span>
                      {i.region ? i.region : 'N/A'}
                    </p>
                    <p>
                      <span>Sub Region: </span>
                      {i.subregion ? i.subregion : 'N/A'}
                    </p>
                    <p>
                      <span>Capital: </span>
                      {i.capital ? i.capital : 'N/A'}
                    </p>
                  </CountryInfoDetailsInner>
                  <CountryInfoDetailsInner className="second">
                    <p>
                      <span>Top Level Domain: </span>
                      {i.tld[0]}
                    </p>
                    <p>
                      <span>Currencies: </span>
                      {getCurrency(i)}
                    </p>
                    <p>
                      <span>Languages: </span>
                      {getLanguages(i)}
                    </p>
                  </CountryInfoDetailsInner>
                </CountryInfoDetails>
                <CountryBorders>
                  <p>
                    <span>Border Countries: {!i.borders && 'N/A'}</span>
                  </p>
                  {i.borders &&
                    i.borders.map((border) => {
                      const borderName = getBorderCountryName(allCountries, border);
                      return (
                        <ButtonWrapper>
                          <Link
                            className="country-links"
                            to={`/country/${borderName && borderName.toLowerCase()}`}
                          >
                            <Button>{borderName}</Button>
                          </Link>
                        </ButtonWrapper>
                      );
                    })}
                </CountryBorders>
              </CountryInfo>
            </CountryDetailsWrapper>
          );
        })}
    </CountryDetailStyles>
  );
}

export default CountryDetail;
