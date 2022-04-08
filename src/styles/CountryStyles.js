import styled from 'styled-components';

const CountryWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const Flag = styled.div.attrs((props) => ({
  style: {
    background: `url(${props.flag}) no-repeat center center/cover`,
  },
}))`
  width: 100%;
  height: 160px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CountryInfo = styled.h2`
  font-weight: 800;
  font-size: 18px;
`;

const CountryInfoContainer = styled.div`
  padding: 2.25rem 1.5rem;
  font-weight: 300;
`;

const CountryInfoNumbers = styled.div`
  margin-top: 1.2rem;

  p {
    margin-bottom: 0.3rem;
    font-size: 14px;
  }
`;

export {
  CountryWrapper,
  Flag,
  CountryInfo,
  CountryInfoContainer,
  CountryInfoNumbers,
};
