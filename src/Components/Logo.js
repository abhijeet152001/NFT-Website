import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logotext = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
&:hover {
  transform: scale(1.1);
}
@media (max-width: 64em) {
  font-size: ${props => props.theme.fontxxl};

}
`

const Logo = () =>{
return (
    <Logotext>
    <Link to="/">
        W.
    </Link>
    </Logotext>
)
}

export default Logo;