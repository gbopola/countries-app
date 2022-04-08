import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { useDarkMode } from './hooks/useDarkMode';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  const [countries, setCountries] = useState(null);
  const [currCountry, setCurrCountry] = useState(null);
  const [regions] = useState(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios('https://restcountries.com/v3.1/all');
      setCurrCountry(response.data);
      setCountries(response.data);
    };
    fetchCountries();
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Navbar navTheme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CountryList
                country={countries}
                currCountry={currCountry}
                regions={regions}
                setCountries={setCountries}
              />
            )}
          />
          <Route
            path="/country/:name"
            render={(routeProps) => (
              <CountryDetail {...routeProps} allCountries={currCountry} />
            )}
          />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
