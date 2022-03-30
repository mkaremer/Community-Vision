import React, { forwardRef, useState, useImperativeHandle } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

import LearnAlphabetIMG from "./Games/LearnAlphabet.jpg" //test image (pig)
import dotsIMG from "./Games/Icons/dots.jpg"
import dashIMG from "./Games/Icons/dash.png"
import hitIMG from "./Games/Icons/hitIMG.png"
import threeHitIMG from "./Games/Icons/hitIMG.png" 
import buttonsImg from "./Games/Icons/explore dot and dash.jpg"
import alphabetIMG from "./Games/Icons/learn morse patterns.jpg"
import abceyes from "./Games/Icons/learn morse alphabet.jpg"
import numbersIMG from "./Games/Icons/learn morse numbers.jpg"
import sandboxIMG from "./Games/Icons/sandbox letters.png"
import sandBocWords from "./Games/Icons/sandbox words.png"
import LearnABCIMG from "./Games/Icons/learn words.png"
import chooseLettersIMG from "./Games/Icons/choose your letters.jpg"
import needleImg from "./Games/Icons/learn words 2.jpg"
import raceLevel3 from "./Games/Icons/alphabet race game.jpg"
import stackABC from "./Games/Icons/learn morse alphabet 2.jpg"
import unicycleImg from "./Games/Icons/learn words 3.jpg"
import raceLevel4 from "./Games/Icons/alphabet race game 2.jpg"
import { initial } from "./Games/Common/Functions"
import { Container } from '@material-ui/core';

/**
 * This file is the menu of links to the game categories 
 */
const Games = forwardRef((props, ref) => {
  const [backgroundColor, setBackgroundColor] = useState(() => '#e8e8e8');
  const [fontColor, setFontColor] = useState(() => 'black');
  useImperativeHandle(
    ref,
    () => ({
      update() {
        setBackgroundColor('#e8e8e8');
        setFontColor('black');
      }
    }),
  )

  return (
    <div style={{
      backgroundColor: backgroundColor,
      position: 'relative',
      height: '90vh',
      width: '100vw',
      display: 'grid',
      gridTemplate: '1fr 4fr / 1fr',
      gridTemplateAreas: '"top" "bottom'
    }}>
      <Container maxWidth='x1' style={{ backgroundColor: backgroundColor, paddingBottom: '2vh' }}>
        <Grid container justify='left' space={4}>
         <Grid item xs={8} justify='left' style={{ height: '40%', paddingBottom: '6vh', paddingTop: '3vh'}}>
          </Grid>
        <h1 style={{ fontSize: '8vh', color: fontColor, position: 'absolute', left: '42%', padding: 0, paddingTop: '20px', paddingBottom: '50px', margin: '1vh', userSelect: 'none', cursor: 'default' }}>Games</h1>
      </Grid>
      </Container>

      <Container maxWidth='xl' style={{ backgroundColor: backgroundColor, paddingBottom: '2vh', paddingTop: '3vh' }}>
        <div justify='center' spacing={2} style={{ display: 'grid', 'grid-template-columns' : 'auto auto auto auto', 'justify-content' : 'space-around'}}>

            <Link className='nav-link' to="/GamesBasics" style={{
              backgroundColor: backgroundColor}}>
              <button style={{
                width: '20vw',
                height: '20vw',
                fontSize: '5vh',
                fontWeight: 900,
                userSelect: 'none',
                cursor: 'pointer',
                backgroundColor: '#eb6253',
                borderColor: '#eb6253',
                color: 'white',
              }}>Learn Morse Basics</button>
            </Link>


            <Link className='nav-link' to="/GamesLetters" style={{
              backgroundColor: backgroundColor}}>
              <button style={{
                width: '20vw',
                height: '20vw',
                fontSize: '5vh',
                fontWeight: 900,
                userSelect: 'none',
                cursor: 'pointer',
                backgroundColor: '#21aaa4',
                borderColor: '#21AAA4',
                color: 'white',
              }}>Learn Morse Letters and Numbers</button>
            </Link>

            <Link className='nav-link' to="/GamesWords" style={{
              backgroundColor: backgroundColor}}>
              <button style={{
                width: '20vw',
                height: '20vw',
                fontSize: '5vh',
                fontWeight: 900,
                userSelect: 'none',
                cursor: 'pointer',

                backgroundColor: '#78c04b',
                borderColor: '#78c04b',
                color: 'white',
              }}>Learn Morse Words</button>
            </Link>


            <Link className='nav-link' to="/GamesThemes" style={{
              backgroundColor: backgroundColor}}>
              <button style={{
                width: '20vw',
                height: '20vw',
                fontSize: '5vh',
                fontWeight: 900,
                userSelect: 'none',
                cursor: 'pointer',

                backgroundColor: '#3b63a2',
                borderColor: '#3b63a2',
                color: 'white',
              }}>Themed Morse Games</button>
            </Link>

        </div>
      </Container>

      <Link className='nav-link' to="/" style={{
        backgroundColor: backgroundColor
      }}>
        <button style={{
          width: '40vw',
          fontSize: '5vh',
          fontWeight: 900,
          userSelect: 'none',
          cursor: 'pointer',
          marginBottom: "5vh",
          backgroundColor: '#21AAA4',
          borderColor: '#21AAA4',
          color: 'white',
        }}>Go Back to Home</button>
      </Link>

      <Link className='nav-link' to="/" style={{
        backgroundColor: backgroundColor
      }} onMouseUp={() => {
               window.open('https://docs.google.com/forms/d/1-Fy6sjP-xcLqWLefGCBUbdbZIKBPwEkvyng9boBpO58/edit', '_blank');
            }}>
        <button style={{
          width: '40vw',
          fontSize: '5vh',
          fontWeight: 900,
          userSelect: 'none',
          cursor: 'pointer',
          marginBottom: "5vh",
          backgroundColor: '#21AAA4',
          borderColor: '#21AAA4',
          color: 'white',
        }}>Give us Feedback!</button>
      </Link>
    </div>

  );
})



export default Games;