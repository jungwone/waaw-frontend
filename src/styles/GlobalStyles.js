import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset} 

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        letter-spacing:1px;

        @font-face {
           font-family: 'CookieRun-Regular';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'RIDIBatang';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        font-family: "RIDIBatang";
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    

`;
