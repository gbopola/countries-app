import styled from 'styled-components';

 const CountryDetailStyles = styled.div`
    padding: 3rem 5rem;

    .second {
      margin-left: 9rem;
    }

    @media(max-width: 563px){
      padding: 3rem 1.75rem;
      .second {
        margin-left: 0;
        margin-top: 2.75rem;
      }
  }
 `;
 
 const LinkWrapper = styled.div`
      background: ${({ theme }) => theme.background};
      display: inline-block;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-weight: 300;
      margin-bottom: 4rem;

      i {
        margin-right: 1rem;
      }

      @media(max-width: 563px){
        font-size: 14px;
    }
 `;

 const ImgContainer = styled.img`
   width: 560px;
   height: 401px;
   border-radius: 5px;
   @media(max-width: 1200px){
     width: 320px;
     height: 229px;
   }
 `;

 const CountryInfo = styled.div`
  margin-left: 8rem;
  margin-top: 1rem;
   h1 {
      margin-bottom: 1rem;
   }

   @media(max-width: 1200px){
     margin-left: 0;
     margin-top: 3rem;
   }

   @media(max-width: 563px){
     h1 {
       font-size: 22px;
     }
}
 `;

 const CountryInfoDetails = styled.div`
 display: flex;
 @media(max-width: 563px){
  flex-direction: column;
}
 `;

 const CountryDetailsWrapper = styled.div`
   display: flex;
   @media(max-width: 1200px){
     flex-direction: column;
   }
 `;

 const CountryInfoDetailsInner = styled.div`
   p {
     line-height: 32px;
     font-weight: 300;
   }
   @media(max-width: 563px){
    font-size: 14px;
}
 `;

 const CountryBorders = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 4rem;
 `;

 const ButtonWrapper = styled.div`
 `;

 const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 0.4rem 2rem;
    justify-content: center;
    border: none;
    font-size: 14px;
    font-weight: 300;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
    @media(max-width: 563px){
      font-size: 12px;
  }
 `;


export { CountryDetailStyles, ImgContainer, CountryInfo, CountryInfoDetails, CountryDetailsWrapper, CountryInfoDetailsInner, CountryBorders, LinkWrapper, Button, ButtonWrapper };