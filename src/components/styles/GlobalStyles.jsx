import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
     font-family: Roboto, sans-serif;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     #rcc-confirm-button {
        letter-spacing: 1px;
         transition: 0.3s ease;
     }
     #rcc-confirm-button:hover {
             background: #fff !important;
             color: #272727 !important;
         }
         
     
 }
`;
