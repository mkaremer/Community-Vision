import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../../App.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Container } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { charToMorse } from "./charMorseConv";
import useSound from "use-sound";
import dashSound from "../Assets/Sounds/dash.mp3";
import dotSound from "../Assets/Sounds/dot.mp3";
import spacebar from "../Assets/Images/spacebar.png";
import enterButton from "../Assets/Images/enterButton.png";
import {
  initial,
  resetInputTime,
  resetInputLength,
  BackButton,
} from "./Common/Functions";
import { useHistory } from "react-router-dom";
import { Transition } from "react-spring/renderprops";
import sounds from "./LetterSounds";
import correctFX from "../Assets/Sounds/correct.mp3";

/**
 *      IMPROVEMENT
 * 1. Naming convention
 *      global variables:
 *      - t => timerId
 *      - list => morseCodeList
 *      - textIndex => tutorialStepIndex
 *      function names:
 *          - buttonClick => highlightSelectedButton
 *          - updateTutorial = > updateTutorialText
 *          - FourHit => FourHitGame
 *     others:
 *      - fSize => fontSize
 *      - sfSize => subFontSize
 */

let timerId;
let morseCodeList = "BCFHJPQVXY";
let tutorialStepIndex = 0;
let promptsCheck = true;

/**
 * This function Highlights the selected button and resets the style of the non-selected button.
 *
 * @param {string} clicked - The ID of the button that has been clicked (selected).
 * @param {string} notClicked - The ID of the button that has not been clicked (not selected).
 */
function highlightSelectedButton(clicked, notClicked) {
  document.getElementById(clicked).style.fontSize = "5vh";
  document.getElementById(clicked).style.backgroundColor = "White";
  document.getElementById(clicked).style.outlineColor = "Red";
  document.getElementById(notClicked).style.outlineColor = "Grey";
  document.getElementById(notClicked).style.fontSize = "4vh";
  document.getElementById(notClicked).style.backgroundColor = "Grey";
}

function showImage() {
  let x = document.getElementById("tutorialImage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/**
 * Advances the tutorial to the next step, updating text and visual elements.
 *
 * The function updates tutorial instructions and highlights relevant UI elements based on
 * the current tutorial step, controlled by the global `tutorialStepIndex`. It manipulates the DOM
 * directly to change text, styles, and toggle visibility of images, assuming the presence of specific
 * elements like "tutorialText", "dotButton", and "sampleMorseCode". It also resets the tutorial
 * after the final step.
 * @param - None
 */
function updateTutorialText() {
  //   let text = document.getElementById("tutorialText").innerHTML;
  let space = document.getElementById("spaceImage");
  let enter = document.getElementById("enterImage");

  if (tutorialStepIndex == 0) {
    document.getElementById("tutorialText").innerHTML =
      "This game consists of two buttons at the bottom of the page";

    tutorialStepIndex++;
  } else if (tutorialStepIndex == 1) {
    document.getElementById("tutorialText").innerHTML =
      "This button is used for the dots and can be accessed through the space button or by clicking here!";
    document.getElementById("dotButton").style.backgroundColor = "yellow";
    space.style.display = "block";
    tutorialStepIndex++;
  } else if (tutorialStepIndex == 2) {
    document.getElementById("dotButton").style.backgroundColor =
      document.getElementById("dashButton").style.backgroundColor;
    document.getElementById("tutorialText").innerHTML =
      "This button is used for the dashes and can be accessed through the enter button or by clicking here!";
    document.getElementById("dashButton").style.backgroundColor = "yellow";
    space.style.display = "none";
    enter.style.display = "block";
    tutorialStepIndex++;
  } else if (tutorialStepIndex == 3) {
    document.getElementById("dashButton").style.backgroundColor =
      document.getElementById("dotButton").style.backgroundColor;
    document.getElementById("tutorialText").innerHTML =
      "Enter the correct Morse Code shown here!";
    document.getElementById("sampleMorseCode").style.color =
      document.getElementById("dotButton").style.backgroundColor;
    enter.style.display = "none";
    tutorialStepIndex++;
  } else if (tutorialStepIndex == 4) {
    // change this in your tutorials to change the color of the divs
    document.getElementById("sampleMorseCode").style.color =
      document.getElementById("dotButton").style.color;
    document.getElementById("tutorialText").innerHTML =
      "Enter the correct code and move onto the next letter. Have Fun Learning the Morse Alphabet!";
    tutorialStepIndex++;
    // change color back to regular
  } else if (tutorialStepIndex == 5) {
    // changes smaple morse back to normal color
    document.getElementById("sampleMorse").style.color =
      document.getElementById("dashButton").style.backgroundColor;
    tutorialStepIndex = 0;
    document.getElementById("tutorialMenu").onMouseDown();
  }
}

/**
 * FourHitGame is a React component that implements a game for learning Morse code.
 * It uses various states to manage game logic and user interactions, and plays
 * sounds based on user input. The game progresses through different stages,
 * indicated by startScreen and endScreen states. Users interact with the game
 * primarily through keyboard inputs (space and enter keys).
 *
 * @param {Object} props - The props passed to the component.
 * @param {Object} ref - The ref passed to the component, used for ref forwarding.
 */
const FourHitGame = forwardRef((props, ref) => {
  const history = useHistory();
  function backToGames() {
    history.push("/games");
  }

  let [index, setIndex] = useState(0);
  let currentLetter = morseCodeList[index];
  let currentMorse = charToMorse(currentLetter);
  let [input, setInput] = useState("");
  const [anim, setAnim] = useState(true);

  const [volume, setVolume] = useState(() => initial("volume"));
  const [size, setSize] = useState(() => initial("size"));
  const [speed, setSpeed] = useState(() => initial("speed"));
  const [backgroundColor, setBackgroundColor] = useState(() =>
    initial("backgroundColor")
  );
  const [dashButtonColor, setDashButtonColor] = useState(() =>
    initial("dashButtonColor")
  );
  const [dotButtonColor, setDotButtonColor] = useState(() =>
    initial("dotButtonColor")
  );
  const [fontColor, setFontColor] = useState(() => initial("fontColor"));
  const resetTimer = speed * 1000; //reset timer in milliseconds
  const fontSize = size + "vh";
  const subFontSize = size / 3 + "vh";

  const [playDash] = useSound(dashSound, { volume: volume / 100 });
  const [playDot] = useSound(dotSound, { volume: volume / 100 });

  let soundSrc = sounds[currentLetter];
  const [playCurrentLetterSound] = useSound(soundSrc, { volume: volume / 100 });

  const [playCorrectSoundFX] = useSound(correctFX, { volume: volume / 100 });

  let [startScreen, setStartScreen] = useState(true);
  let [endScreen, setEndScreen] = useState(false);

  resetInputLength(input, setInput);

  React.useEffect(() => {
    if (input === currentMorse) {
      playCorrectSoundFX();
      clearTimeout(timerId);
      setTimeout(() => {
        clearTimeout(timerId);
        playCurrentLetterSound();
        setTimeout(() => {
          clearTimeout(timerId);
          setAnim(!anim);
          setInput("");
          if (index != morseCodeList.length - 1) {
            setIndex((prevState) => prevState + 1);
          } else {
            setIndex(0);
            setEndScreen(true);
          }
        }, resetTimer);
      }, resetTimer);
    }
  }, [input]);

  // tracks keycodes for space button  and enter button input
  const [handleKeyDown, setHandleKeyDown] = useState(true);
  document.onkeydown = function (evt) {
    if (!handleKeyDown) return;
    setHandleKeyDown(false);
    evt = evt || window.event;
    if (evt.keyCode === 32) {
      if (startScreen) {
      } else if (endScreen) {
        backToGames();
      } else {
        setInput(input + "•");
        playDot();
        document.getElementById("dotButton").focus();
        clearTimeout(timerId);
        timerId = resetInputTime(timerId, input, setInput, resetTimer);
      }
    } else if (evt.keyCode === 13) {
      if (startScreen) {
        setStartScreen(false);
      } else if (endScreen) {
        setEndScreen(false);
      } else {
        setInput(input + "-");
        playDash();
        document.getElementById("dashButton").focus();
        clearTimeout(timerId);
        timerId = resetInputTime(timerId, input, setInput, resetTimer);
      }
    }
  };
  document.onkeyup = function (evt) {
    //
    setHandleKeyDown(true); //
    document.activeElement.blur(); //
  }; //

  let d = 2000;
  if (!anim) {
    d = 0;
    timerId = setTimeout(function () {
      setAnim(!anim);
    }, 100);
  }
  let { x } = useSpring({
    from: { x: 0 },
    x: anim ? 1 : 0,
    config: { duration: d },
  });

  useImperativeHandle(ref, () => ({
    update() {
      setVolume(initial("volume"));
      setSize(initial("size"));
      setSpeed(initial("speed"));
      setBackgroundColor(initial("backgroundColor"));
      setDashButtonColor(initial("dashButtonColor"));
      setDotButtonColor(initial("dotButtonColor"));
      setFontColor(initial("fontColor"));
    },
  }));

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        height: "90vh",
        width: "100vw",
        display: "grid",
        gridTemplate: "8fr 8fr / 1fr",
        gridTemplateAreas: '"top" "middle" "bottom',
      }}
    >
      <Transition
        items={startScreen}
        duration={500}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(toggle) =>
          toggle
            ? (props) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100vw",
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    ...props,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: 0.7,
                    }}
                  />
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ height: "100%", width: "100%", zIndex: 1 }}
                  >
                    <Grid
                      item
                      style={{ userSelect: "none", cursor: "default" }}
                    >
                      <Card>
                        <h1
                          style={{
                            marginBottom: "0vh",
                            fontSize: "8vh",
                          }}
                        >
                          Learn Morse Alphaphet With 4 Hits
                        </h1>
                        <br />
                        <p
                          id="instructions"
                          style={{
                            marginTop: "0vh",
                            paddingLeft: "2vw",
                            paddingRight: "2vw",
                            fontSize: "4vh",
                            display: "none",
                          }}
                        >
                          Look for the dot ('space') and dash ('enter') patterns
                          to make a letter
                        </p>
                      </Card>
                    </Grid>
                    <br />
                    <Grid
                      id="pr"
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <h1
                        style={{
                          fontSize: "4vh",
                          backgroundColor: "white",
                        }}
                      >
                        Morse Prompts:
                      </h1>
                      <Grid>
                        <button
                          id="yesPrompts"
                          style={{
                            border: "none",
                            "margin-left": "30px",
                            "margin-right": "30px",
                            fontSize: "5vh",
                            cursor: "pointer",
                            "outline-style": "solid",
                            "outline-width": "thick",
                          }}
                          onMouseDown={function () {
                            promptsCheck = true;
                            highlightSelectedButton("yesPrompts", "noPrompts");
                          }}
                        >
                          Yes
                        </button>

                        <button
                          id="noPrompts"
                          style={{
                            border: "none",
                            fontSize: "5vh",
                            cursor: "pointer",
                            "outline-style": "solid",
                            "outline-width": "thick",
                          }}
                          onMouseDown={function () {
                            promptsCheck = false;
                            highlightSelectedButton("noPrompts", "yesPrompts");
                          }}
                        >
                          No
                        </button>
                      </Grid>
                    </Grid>
                    <Grid item style={{ userSelect: "none" }}>
                      <Card>
                        <button
                          id="doneOptions"
                          style={{
                            fontSize: "8vh",
                            height: "100%",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          onMouseDown={function () {
                            let start = document.getElementById("start");
                            start.style.display = "block";
                            let done = document.getElementById("doneOptions");
                            done.style.display = "none";
                            let instructions =
                              document.getElementById("instructions");
                            instructions.style.display = "block";
                            let prom = document.getElementById("pr");
                            prom.style.display = "none";
                          }}
                        >
                          Done
                        </button>
                      </Card>
                      <Card>
                        <button
                          id="start"
                          style={{
                            display: "none",
                            fontSize: "8vh",
                            height: "100%",
                            width: "100%",
                            cursor: "pointer",
                          }}
                          onMouseDown={function () {
                            if (startScreen) {
                              setStartScreen(false);
                            }
                          }}
                        >
                          Press Enter (dash) to Start
                        </button>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              )
            : (props) => <div />
        }
      </Transition>
      <Transition
        items={endScreen}
        duration={500}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(toggle) =>
          toggle
            ? (props) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100vw",
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    ...props,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: 0.7,
                    }}
                  />
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ height: "100%", width: "100%", zIndex: 1 }}
                  >
                    <Grid
                      item
                      xs={9}
                      style={{ userSelect: "none", color: fontColor }}
                    >
                      <Card>
                        <h1
                          style={{
                            marginBottom: "0vh",
                            fontSize: "8vh",
                          }}
                        >
                          Yay!
                        </h1>
                        <br />
                        <p
                          style={{
                            marginTop: "0vh",
                            paddingLeft: "2vw",
                            paddingRight: "2vw",
                            fontSize: "8vh",
                            marginBottom: "0vh",
                          }}
                        >
                          You have learned the alphabet with 4 hits in Morse.
                        </p>
                      </Card>
                    </Grid>
                    <Grid item xs={4} style={{ userSelect: "none" }}>
                      <Card>
                        <button
                          style={{
                            fontSize: "8vh",
                            cursor: "pointer",
                            height: "100%",
                            width: "100%",
                          }}
                          onMouseDown={function () {
                            backToGames();
                          }}
                        >
                          Other Games (•)
                        </button>
                      </Card>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={4} style={{ userSelect: "none" }}>
                      <Card>
                        <button
                          style={{
                            fontSize: "8vh",
                            cursor: " pointer",
                            height: "100%",
                            width: "100%",
                          }}
                          onMouseDown={function () {
                            setEndScreen(false);
                          }}
                        >
                          More Practice (-)
                        </button>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              )
            : (props) => <div />
        }
      </Transition>
      <div style={{ gridArea: "top" }}>
        {
          <div style={{ position: "absolute" }}>
            <Container>
              <BackButton />
            </Container>
          </div>
        }
        <div id="sampleMorse">
          <animated.h1
            style={{
              lineHeight: 0,
              color: fontColor,
              fontSize: fontSize,
              pointer: "default",
              userSelect: "none",
              opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
            }}
          >
            {currentLetter}
          </animated.h1>
          <animated.p
            id="sampleMorseCode"
            style={{
              lineHeight: 0,
              color: fontColor,
              fontSize: subFontSize,
              pointer: "default",
              userSelect: "none",
              opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
              marginBottom: "0vh",
            }}
          >
            {promptsCheck ? currentMorse : ""}
          </animated.p>
        </div>
      </div>
      <div style={{ gridArea: "middle" }}>
        <Container>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={1}>
              <p
                style={{
                  lineHeight: 0,
                  color: fontColor,
                  fontSize: "10vh",
                  pointer: "default",
                  userSelect: "none",
                }}
              >
                {" "}
                &nbsp;{" "}
              </p>
            </Grid>
            <Grid item sm={10}>
              <p
                style={{
                  lineHeight: 0,
                  color: fontColor,
                  fontSize: "10vh",
                  textAlign: "center",
                  pointer: "default",
                  userSelect: "none",
                }}
              >
                {input}
              </p>
            </Grid>
            <Grid item xs={1}>
              <p
                style={{
                  lineHeight: 0,
                  color: fontColor,
                  fontSize: "10vh",
                  pointer: "default",
                  userSelect: "none",
                }}
              >
                {" "}
                &nbsp;{" "}
              </p>
            </Grid>
          </Grid>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
              <Card>
                {/* button updates */}
                <CardActionArea>
                  <button
                    id="dotButton"
                    style={{
                      backgroundColor: dotButtonColor,
                      width: "100%",
                      height: "20vh",
                      cursor: "pointer",
                      textAlign: "center",
                      fontSize: "35vh",
                      color: fontColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseDown={function () {
                      setInput(input + "•");
                      playDot();
                      clearTimeout(timerId);
                      timerId = resetInputTime(
                        timerId,
                        input,
                        setInput,
                        resetTimer
                      );
                    }}
                  >
                    <span>•</span>
                  </button>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  <button
                    id="dashButton"
                    style={{
                      backgroundColor: dashButtonColor,
                      width: "100%",
                      height: "20vh",
                      cursor: "pointer",
                      textAlign: "center",
                      fontSize: "35vh",
                      color: fontColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseDown={function () {
                      setInput(input + "-");
                      playDash();
                      clearTimeout(timerId);
                      timerId = resetInputTime(
                        timerId,
                        input,
                        setInput,
                        resetTimer
                      );
                    }}
                  >
                    -
                  </button>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
});

const Radio = () => {
  const [isToggled, setToggle] = useState(false);
  const menubg = useSpring({ background: isToggled ? "#6ce2ff" : "#ebebeb" });
  const { y } = useSpring({
    y: isToggled ? 180 : 0,
  });
  const menuAppear = useSpring({
    transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: isToggled ? 1 : 0,
  });

  return (
    <div style={{ position: "relative", width: "300px", margin: "0 auto" }}>
      <animated.button
        style={menubg}
        value="!toggled"
        className="radiowrapper"
        onMouseDown={() => setToggle(!isToggled)}
        id="tutorialMenu"
      >
        <div className="radio">
          <p>Tutorial</p>
          <animated.p
            style={{
              transform: y.interpolate((y) => `rotateX(${y}deg)`),
            }}
          >
            ▼
          </animated.p>
        </div>
      </animated.button>
      <animated.div style={menuAppear}>
        {isToggled ? <RadioContent /> : null}
      </animated.div>
    </div>
  );
};

// use state object and set it to 0 initially
const RadioContent = () => {
  return (
    <div className="radiocontent">
      <a href="#" alt="Home"></a>
      <button
        id="4"
        onMouseDown={function () {
          updateTutorialText();
        }}
        style={{ fontSize: "5vh" }}
      >
        Next
      </button>
      <p id="tutorialText" value="Change Text">
        Welcome to the Learn Alphabet Game! This game teaches you the Morse Code
        Alphabet!{" "}
      </p>
      <img
        src={spacebar}
        alt="Spacebar"
        id="spaceImage"
        style={{ display: "none" }}
      ></img>
      <img
        src={enterButton}
        alt="Enter Button"
        id="enterImage"
        style={{ display: "none" }}
      ></img>
    </div>
  );
};

export default FourHitGame;
