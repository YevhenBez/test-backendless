import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
    list-style-type: none;
    background-color: #808000;
    margin: 0 auto;
`;

export const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    display: inline-block;
    padding: 24px 20px 22px 80px;
    text-decoration: none;
    font-weight: 400;
    font-size: 28px;
    color: white;
    line-height: 1.21;
    font-family: Merriweather, serif;
`;

export const StyledButton = styled.button`
    color: #FFFFFF;

    background-color: #B29F7E;
    padding: 11px 20px;
    width: 160px;
    border-radius: 5px;

    font-family: Merriweather;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.37;

    cursor: pointer;

`;