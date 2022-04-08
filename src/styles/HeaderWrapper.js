import styled from 'styled-components';

const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   padding: 3rem 5rem 4rem 5rem;
   .inner-wrapper {
       position: relative;
       width: 480px;

       i {
        color: ${({ theme }) => theme.placeholderColor};
        position: absolute;
        top: 20px;
        left: 20px;
       }
   }


   .select, .dropdown-content {
        box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.10);
       border-radius: 5px;
   }

   .inner-select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 56px;
    padding: 0 0.5rem;

    i {
        color: ${({ theme }) => theme.text};
    }
   }

   .select {
       font-size: 14px;
       position: relative;
       background: ${({ theme }) => theme.background};
       padding: 0 1rem;
       cursor: pointer;
   }

   .dropdown-content {
       display: ${props => props.open ? "block" : "none"};
       padding: 0.75rem 0.5rem;
       position: absolute;
       left: 0;
       width: 100%;
       margin-top: 0.5rem;
       background: ${({ theme }) => theme.background};
   }

   .dropdown-content p {
       display: block;
       padding: 0.35rem 1rem;
   }

   @media(max-width: 1171px){
    padding: 3rem 3rem 4rem 3rem;
}

@media(max-width: 900px){
    flex-direction: column;
    align-items: flex-start;

    .inner-wrapper {
        width: 100%;
    }

    .select {
        margin-top: 2.75rem;
    }
}

@media(max-width: 563px){
    padding: 3rem 1rem 4rem 1rem;

    .select {
        font-size: 12px;
    }

}
`;

export {HeaderWrapper};