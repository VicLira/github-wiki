import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        border: 0;

        font-family: 'Roboto', 'open-sans';
    }

    body {
        background-color: #22272e;
        color: #fff;
    }
`