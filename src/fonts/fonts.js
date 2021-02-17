import { createGlobalStyle } from "styled-components";
import B612 from "fonts/B612-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'B612';
        src: local('B612'), local('B612'),
        url(${B612}) format('ttf'),
        font-weight: 400;
        font-style: normal;
    }
`;
