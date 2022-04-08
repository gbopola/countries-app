import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.body};
  }

    h1, h2, p, input, span {
        color: ${({ theme }) => theme.text}
    }

    span {
        font-weight: 600;
    }
  `;