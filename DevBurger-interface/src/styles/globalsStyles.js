import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';


const globalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Poppins", sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    button{
        cursor: pointer;
    }



`;

export default globalStyles;