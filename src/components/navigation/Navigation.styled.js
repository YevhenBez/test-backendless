import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUl = styled.ul`
    display: flex;
    gap: 30px;
    list-style-type: none;
    background-color: #808000;
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