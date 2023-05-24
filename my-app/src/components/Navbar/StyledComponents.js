import styled from "styled-components";
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
    position: fixed;
    height: 90px;
    display: flex;
    align-items: center;
    z-index: 15;
    background-color: darkolivegreen;
    justify-content: space-between;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    
    

    a{
        text-decoration: none;
    }
`;

export const Up = styled(FaBars)`
    color: white;
    text-decoration: none;
    display: flex;
    font-size: 7vh;
    position: absolute;
    right: 2vh;
`;

export const NavMenu = styled.ul`
display: flex;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;

& > li {
    float: left;

    & > a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 2vh 5vw;
        font-size: 23px;
        text-decoration: none;

        &:hover {
            background-color: black;
            color: white;
            border-radius: 5vh;
        }
    }
}

& > .dropdown {
    display: inline-block;

    & > .dropdown-content {
        display: none;
        position: absolute;
        background-color: darkolivegreen;
        min-width: 17vw;
        z-index: 1;


        & > a {
            color: white;
            padding: 2vw 5vw;
            text-decoration: none;
            display: block;
            text-align: center;

            &:hover {
                background-color: black;
                border-radius: 5vh;
            }
        }
    }

    &:hover .dropdown-content {
        display: block;
        border-radius: 5vh;
    }
}

@media screen and (max-width: 1024px) {
    display: none;
}
`;

export const NavLogo = styled.a`
    color: white;
    background-color: transparent;
    text-decoration: none;
    display: flex;
    margin-left: 10px;
    font-size: 7vh;
    transition-duration: 0.8s;
    position: absolute;
    left: 2vh;
    
    &:hover {
        color: black;
        font-size: 8vh;
    }
`;

export const Basket = styled.a`
    color: white;
    text-decoration: none;
    display: flex;
    font-size: 7vh;
    position: absolute;
    right: 15vh;
`;







