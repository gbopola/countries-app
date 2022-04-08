import styled from 'styled-components';

const CountryListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 5rem 2rem 5rem;
  grid-gap: 5rem;

  @media (max-width: 1171px) {
    padding: 0 3rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem 3rem;
  }

  @media (max-width: 563px) {
    grid-template-columns: none;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 5rem;
`;

export { CountryListStyles, LoaderWrapper };
