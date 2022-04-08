import { SearchForm } from '../styles/SearchFormStyles';
import { HeaderWrapper } from '../styles/HeaderWrapper';
import { useState } from 'react';

function Header({ changeRegion, regions }) {
  const [open, setOpen] = useState(false);

  const openFilters = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const handleChange = (e) => {
    changeRegion(e.target.value);
  };

  const filterRegion = (e) => {
    changeRegion(e.target.textContent);
  };

  return (
    <HeaderWrapper open={open}>
      <div className="inner-wrapper">
        <i className="fas fa-search"></i>
        <SearchForm
          type="text"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </div>
      <div className="select">
        <div className="inner-select" onClick={openFilters}>
          <p>Filter by Region</p>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="dropdown-content">
          {regions.map((region) => (
            <p key={region} onClick={filterRegion}>
              {region}
            </p>
          ))}
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
