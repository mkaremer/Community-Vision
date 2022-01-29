//////////////////////////////////////////////////////////
/////////////////Import all images////////////////////////
//////////////////////////////////////////////////////////
import tomatoImg from "./Images/tomato.png"
import moonImg from "./Images/moon.png"
import owlImg from "./Images/owl.png"
import truckImg from "./Images/truck.png"
import monkeyImg from "./Images/monkey.png"
import octopusImg from "./Images/octopus.png"
import turtleImg from "./Images/turtle.png"
import milkImg from "./Images/milk.png"
import orangeImg from "./Images/orange.png"


//////////////////////////////////////////////////////////
/////////////////Import all sounds////////////////////////
//////////////////////////////////////////////////////////
import tomatoSnd from "./WordSound/tomato.flac"
import moonSnd from "./WordSound/moon.flac"
import owlSnd from "./WordSound/owl.flac"


//data to use for learn words
const gameData = [
    {word: "TOMATO", imgSrc: tomatoImg, soundSrc: tomatoSnd},
    {word: "MOON", imgSrc: moonImg, soundSrc: moonSnd},
    {word: "OWL", imgSrc: owlImg, soundSrc: owlSnd},
    {word: "TRUCK", imgSrc: truckImg, soundSrc: tomatoSnd},
    {word: "MONKEY", imgSrc: monkeyImg, soundSrc: tomatoSnd},
    {word: "OCTOPUS", imgSrc: octopusImg, soundSrc: tomatoSnd},
    {word: "TURTLE", imgSrc: turtleImg, soundSrc: tomatoSnd},
    {word: "MILK", imgSrc: milkImg, soundSrc: tomatoSnd},
    {word: "ORANGE", imgSrc: orangeImg, soundSrc: tomatoSnd}    
]

export default gameData