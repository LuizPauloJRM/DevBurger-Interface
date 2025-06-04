import PropTypes from 'prop-types';


import styled from 'styled-components';
import { Button } from '.';
import { Children } from 'react';



export const ContainerButton = styled.button`
    height: 52px;
    width: 100%;
    border :0 ;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    background-color: #7fff00;
     transition: background 0.2s;

    &:hover {
        background-color: #90ee90;
    }




`;


Button.propTypes = {
    children: PropTypes.string,
};