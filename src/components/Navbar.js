import { NavbarStyle } from '../styles/NavbarStyles';
import { NavbarWrapper } from '../styles/NavbarWrapper';

function Navbar({ navTheme, toggleTheme }) {
  return (
    <NavbarWrapper>
      <h1>Where in the world?</h1>
      <NavbarStyle>
        <p onClick={toggleTheme}>
          <i className={navTheme === 'light' ? 'far fa-moon' : 'fas fa-moon'}></i>
          Dark Mode
        </p>
      </NavbarStyle>
    </NavbarWrapper>
  );
}

export default Navbar;
