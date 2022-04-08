import styled from 'styled-components';

const SearchForm = styled.input`
   background: ${({ theme }) => theme.background};
   color: ${({ theme }) => theme.text};
   box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.10);
   border-radius: 5px;
   outline: none;
   border: none;
   height: 56px;
   width: 100%;
   padding-left: 4rem;
   padding-right: 1rem;
    ::placeholder {
        font-size: 14px;
        color: ${({ theme }) => theme.placeholderColor};
    }
    
    @media(max-width: 563px){
         ::placeholder {
             font-size: 12px;
         }
    }
`;

export {SearchForm};