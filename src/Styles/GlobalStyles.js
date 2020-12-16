import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset} 

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 14px;

        @font-face {
           font-family: 'SDMiSaeng';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/SDMiSaeng.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }    
    }
    li {
        list-style: none;
    }
    

`;
