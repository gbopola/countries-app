import styled from 'styled-components';

const NavbarStyle = styled.div`

    p {
        cursor: pointer;
        font-weight: 600;
    }
     i {
         margin-right: 0.4rem;
     }

     @media(max-width: 563px){
         p {
             font-size: 12px;
         }
    }

     
`;

export {NavbarStyle};