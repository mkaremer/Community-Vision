//////////////////////////////////////////////////////////
/////////////////Import all images////////////////////////
//////////////////////////////////////////////////////////
import eggsImg from "./Images/eggs.png"
import islandImg from "./Images/island.png"
import sunImg from "./Images/sun.png"
import hatImg from "./Images/hat.png"
import emailImg from "./Images/email.png"
import iceImg from "./Images/ice.png"
import snakeImg from "./Images/snake.png"
import homeImg from "./Images/home.png"
import eatImg from "./Images/eat.png"
import handImg from "./Images/hand.png"
import iglooImg from "./Images/igloo.png"
import starImg from "./Images/star.png"
//////////////////////////////////////////////////////////
/////////////////Import all sounds////////////////////////
//////////////////////////////////////////////////////////
import appleSnd from "./WordSound/apple.flac"
import eggsSnd from "./WordSound/eggs.flac"
import islandSnd from "./WordSound/island.flac"
import sunSnd from "./WordSound/sun.flac"
import hatSnd from "./WordSound/hat.flac"

//data to use for learn words
const gameData = [
    {word: "EGGS", imgSrc: eggsImg, soundSrc: eggsSnd},
    {word: "ISLAND", imgSrc: islandImg, soundSrc: islandSnd},
    {word: "SUN", imgSrc: sunImg, soundSrc: sunSnd},
    {word: "HAT", imgSrc: hatImg, soundSrc: hatSnd},
    {word: "EAT", imgSrc: eatImg, soundSrc: appleSnd},
    {word: "IGLOO", imgSrc: iglooImg, soundSrc: appleSnd},
    {word: "STAR", imgSrc: starImg, soundSrc: appleSnd},
    {word: "HAND", imgSrc: handImg, soundSrc: appleSnd},
    {word: "EMAIL", imgSrc: emailImg, soundSrc: appleSnd},
    {word: "ICE", imgSrc: iceImg, soundSrc: appleSnd},
    {word: "SNAKE", imgSrc: snakeImg, soundSrc: appleSnd},
    {word: "HOME", imgSrc: homeImg, soundSrc: appleSnd}    
]

export default gameData