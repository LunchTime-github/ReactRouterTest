import {createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700&display=swap');
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family: 'Nanum Gothic', sans-serif;
        font-size: 12px;
        background-color: rgba(20,20,20,1);
        color: white;
        padding-top: 50px;
    }
`

export default globalStyles;