import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   
    *{
        margin:0; 
        padding:0;
        box-sizing: border-box;   
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        --webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;
    }

    #root{
        height:100vh;
    }

    ul, li{
        list-style-type: none;
    }

    body{
        background-color:#ebf6ff;
    }
`;