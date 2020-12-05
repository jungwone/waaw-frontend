import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
    }
    li {
        list-style: none;
    }
    

`;
