import React from "react";
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from "./Button";

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform : capitalize;
width: 80%;
color: ${props => props.theme.text};
align-items: flex-start;
span{
    text-transform: uppercase;
}

.text-1{
  color: blue;
}
.text-2{
  color: orange;
}
.text-3{
  color: red;
}

@media (max-width: 70em) {
  font-size: ${props => props.theme.fontxl};

}
@media (max-width: 48em) {
  align-items: center;
  text-align: center;

}
@media (max-width: 40em) {
  width: 90%;

}
`

const SubTitle = styled.h3`
font-size: ${props => props.theme.font1g};
text-transform : capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
width: 80%;
font-weight: 600;
margin-bottom: 1rem;

align-items: flex-start;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontmd};

}

@media (max-width: 48em) {
  align-items: center;
  text-align: center;

}
`

const ButtonContainer = styled.div`
align-items: flex-start;
width: 80%;

@media (max-width: 48em) {
  align-self: center;
  text-align: center;
  button{

    margin: 0 auto;
  }

}
`

const TypeWriterText = ()=>{
return(
    <>
    <Title>
        Discover a new era of cool
        
<Typewriter
options={{
    autoStart:true,
    loop:true,
}}
  onInit={(typewriter) => {
    typewriter.typeString(`<span class="text-1">NFTs.</span>`)
      .pauseFor(2000)
      .deleteAll()
    .typeString(`<span class="text-2">Collectible Items.</span>`)
      .pauseFor(2000)
      .deleteAll()
    .typeString(`<span class="text-3">Apes Killers!</span>`)
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
/>
    </Title>

  <SubTitle>
  Bored Of apes? Try something new.
  </SubTitle>
  <ButtonContainer> 
  <Button text = "Explore" link ="#about" />
  </ButtonContainer>
</>
)
}

export default TypeWriterText;