import styled from 'styled-components';

const NavbarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 5rem;
  h1 {
    font-size: 24px;
  }

  @media (max-width: 1171px) {
    padding: 0.5rem 3rem;
  }

  @media (max-width: 563px) {
    padding: 0.5rem 1rem;
    h1 {
      font-size: 14px;
    }
  }
`;

export { NavbarWrapper };
