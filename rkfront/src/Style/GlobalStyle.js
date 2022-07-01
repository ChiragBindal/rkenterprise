import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding : 0;
        margin : 0;
        box-sizing : border-box;
        list-style : none;
        text-decoration : none;
        font-family: 'Nunito', sans-serif;
        font-size : 1.2rem;
    }
    a{
    color : inherit;
    font-size : inherit;
    font-family : inherit;
}
`;

export default GlobalStyle;