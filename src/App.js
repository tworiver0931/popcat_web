import React from "react";
import styled from "styled-components";
import {isBrowser, isMobile} from 'react-device-detect';
import Cat from './materials/cat_final.jpg';
import PopCat from './materials/pop_final.jpg';
import pop_sound from './materials/pop_sound.mp3';

const Container = styled.div`
  width: 100%;
  height: 100%;
  `;

const ImageContainer = styled.div`
  position: relative;
  width: 30%;
  height: 30%;
  margin: auto;
`

const Image = styled.img`
  width: 100%;
  height: 100%;

  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`
const Text = styled.h1`
  text-align: center;

  -ms-user-select: none; 
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

const popSound = new Audio(pop_sound);

class App extends React.Component {
  state={
    mouseDown: false,
    pop: 0
  }


  render(){
    const {mouseDown, pop} = this.state;
    return(
      <Container 
            onMouseDown={(event=>{if(isBrowser){this.setState({mouseDown: true, pop: pop+1});
            popSound.currentTime = 0;
            popSound.play();}})}
            onMouseUp={(event=>{if(isBrowser){this.setState({mouseDown: false});}})}

            onTouchStart={(event=>{if(isMobile){this.setState({mouseDown: true, pop: pop+1});
            popSound.currentTime = 0;
            popSound.play();}})}
            onTouchEnd={(event=>{if(isMobile){this.setState({mouseDown: false});}})}
            >
        <ImageContainer>
          {mouseDown ?
            <Image src={PopCat} /> :
            <Image src={Cat}/>}
            <Text>{pop}</Text>
        </ImageContainer>
    </Container>
    )

  }
}

export default App;