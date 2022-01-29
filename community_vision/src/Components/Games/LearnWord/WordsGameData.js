//////////////////////////////////////////////////////////
/////////////////Import all images////////////////////////
//////////////////////////////////////////////////////////
import appleImg from "./Images/apple.png"
import booksImg from "./Images/books.png"
import catImg from "./Images/cat.png"
import dogImg from "./Images/dog.png"
import eggsImg from "./Images/eggs.png"
import flowerImg from "./Images/flower.png"
import giftImg from "./Images/gift.png"
import hatImg from "./Images/hat.png"
import islandImg from "./Images/island.png"
import jarImg from "./Images/jar.png"
import keyImg from "./Images/key.png"
import leafImg from "./Images/leaf.png"
import moonImg from "./Images/moon.png"
import needleImg from "./Images/needle.png"
import owlImg from "./Images/owl.png"
import pantsImg from "./Images/pants.png"
import queenImg from "./Images/queen.png"
import rocksImg from "./Images/rocks.png"
import sunImg from "./Images/sun.png"
import tomatoImg from "./Images/tomato.png"
import unicycleImg from "./Images/unicycle.png"
import violinImg from "./Images/violin.png"
import waterImg from "./Images/water.png"
import xrayImg from "./Images/xray.png"
import yellowImg from "./Images/yellow.png"
import zebraImg from "./Images/zebra.png"

import antImg from "./Images/ant.png"
import ballImg from "./Images/ball.png"
import carImg from "./Images/car.png"
import duckImg from "./Images/duck.png"
import emailImg from "./Images/email.png"
import frogImg from "./Images/frog.png"
import goatImg from "./Images/goat.png"
import homeImg from "./Images/home.png"
import iceImg from "./Images/ice.png"
import jetImg from "./Images/jet.png"
import kiteImg from "./Images/kite.png"
import ladderImg from "./Images/ladder.png"
import monkeyImg from "./Images/monkey.png"
import nutImg from "./Images/nut.png"
import octopusImg from "./Images/octopus.png"
import pigImg from "./Images/pig.png"
import quietImg from "./Images/quiet.png"
import rabbitImg from "./Images/rabbit.png"
import snakeImg from "./Images/snake.png"
import truckImg from "./Images/truck.png"
import unicornImg from "./Images/unicorn.png"
import vacuumImg from "./Images/vacuum.png"
import wormImg from "./Images/worm.png"
import xylophoneImg from "./Images/xylophone.png"
//import yoyoImg from "./Images/yoyo.png"
//import zooImg from "./Images/zoo.png"

import astronautImg from "./Images/astronaut.png"
import bearImg from "./Images/bear.png"
import cakeImg from "./Images/cake.png"
import drumImg from "./Images/drum.png"
import eatImg from "./Images/eat.png"
import fishImg from "./Images/fish.png"
import grapesImg from "./Images/grapes.png"
import handImg from "./Images/hand.png"
import iglooImg from "./Images/igloo.png"
import jacketImg from "./Images/jacket.png"
import kickImg from "./Images/kick.png"
import lemonImg from "./Images/lemon.png"
import milkImg from "./Images/milk.png"
import nestImg from "./Images/nest.png"
import orangeImg from "./Images/orange.png"
import pumpkinImg from "./Images/pumpkin.png"
//import quiltImg from "./Images/quilt.png"
import rainImg from "./Images/rain.png"
import starImg from "./Images/star.png"
import turtleImg from "./Images/turtle.png"
import umbrellaImg from "./Images/umbrella.png"
import vanImg from "./Images/van.png"
import whaleImg from "./Images/whale.png"
import foxImg from "./Images/fox.png"
//import yarnImg from "./Images/yarn.png"
import zipperImg from "./Images/zipper.png"

//////////////////////////////////////////////////////////
/////////////////Import all sounds////////////////////////
//////////////////////////////////////////////////////////
import appleSnd from "./WordSound/apple.flac"
import booksSnd from "./WordSound/books.flac"
import catSnd from "./WordSound/cat.flac"
import dogSnd from "./WordSound/dog.flac"
import eggsSnd from "./WordSound/eggs.flac"
import flowerSnd from "./WordSound/flower.flac"
import giftSnd from "./WordSound/gift.flac"
import hatSnd from "./WordSound/hat.flac"
import islandSnd from "./WordSound/island.flac"
import jarSnd from "./WordSound/jar.flac"
import keySnd from "./WordSound/key.flac"
import leafSnd from "./WordSound/leaf.flac"
import moonSnd from "./WordSound/moon.flac"
import needleSnd from "./WordSound/needle.flac"
import owlSnd from "./WordSound/owl.flac"
import pantsSnd from "./WordSound/pants.flac"
import queenSnd from "./WordSound/queen.flac"
import rocksSnd from "./WordSound/rocks.flac"
import sunSnd from "./WordSound/sun.flac"
import tomatoSnd from "./WordSound/tomato.flac"
import unicycleSnd from "./WordSound/unicycle.flac"
import violinSnd from "./WordSound/violin.flac"
import waterSnd from "./WordSound/water.flac"
import xraySnd from "./WordSound/xray.flac"
import yellowSnd from "./WordSound/yellow.flac"
import zebraSnd from "./WordSound/zebra.flac"

//data to use for learn words
const gameData = [
    //SET ONE
    {word: "APPLE", imgSrc: appleImg, soundSrc: appleSnd},
    {word: "BOOKS", imgSrc: booksImg, soundSrc: booksSnd},
    {word: "CAT", imgSrc: catImg, soundSrc: catSnd},
    {word: "DOG", imgSrc: dogImg, soundSrc: dogSnd},
    {word: "EGGS", imgSrc: eggsImg, soundSrc: eggsSnd},
    {word: "FLOWER", imgSrc: flowerImg, soundSrc: flowerSnd},
    {word: "GIFT", imgSrc: giftImg, soundSrc: giftSnd},
    {word: "HAT", imgSrc: hatImg, soundSrc: hatSnd},
    {word: "ISLAND", imgSrc: islandImg, soundSrc: islandSnd},
    {word: "JAR", imgSrc: jarImg, soundSrc: jarSnd},
    {word: "KEY", imgSrc: keyImg, soundSrc: keySnd},
    {word: "LEAF", imgSrc: leafImg, soundSrc: leafSnd},
    {word: "MOON", imgSrc: moonImg, soundSrc: moonSnd},
    {word: "NEEDLE", imgSrc: needleImg, soundSrc: needleSnd},
    {word: "OWL", imgSrc: owlImg, soundSrc: owlSnd},
    {word: "PANTS", imgSrc: pantsImg, soundSrc: pantsSnd},
    {word: "QUEEN", imgSrc: queenImg, soundSrc: queenSnd},
    {word: "ROCKS", imgSrc: rocksImg, soundSrc: rocksSnd},
    {word: "SUN", imgSrc: sunImg, soundSrc: sunSnd},
    {word: "TOMATO", imgSrc: tomatoImg, soundSrc: tomatoSnd},
    {word: "UNICYCLE", imgSrc: unicycleImg, soundSrc: unicycleSnd},
    {word: "VIOLIN", imgSrc: violinImg, soundSrc: violinSnd},
    {word: "WATER", imgSrc: waterImg, soundSrc: waterSnd},
    {word: "XRAY", imgSrc: xrayImg, soundSrc: xraySnd},
    {word: "YELLOW", imgSrc: yellowImg, soundSrc: yellowSnd},
    {word: "ZEBRA", imgSrc: zebraImg, soundSrc: zebraSnd},
    //SET TWO
    {word: "ANT", imgSrc: antImg, soundSrc: appleSnd},
    {word: "BALL", imgSrc: ballImg, soundSrc: appleSnd},
    {word: "CAR", imgSrc: carImg, soundSrc: appleSnd},
    {word: "DUCK", imgSrc: duckImg, soundSrc: appleSnd},
    {word: "EMAIL", imgSrc: emailImg, soundSrc: appleSnd},
    {word: "FROG", imgSrc: frogImg, soundSrc: appleSnd},
    {word: "GOAT", imgSrc: goatImg, soundSrc: appleSnd},
    {word: "HOME", imgSrc: homeImg, soundSrc: appleSnd},
    {word: "ICE", imgSrc: iceImg, soundSrc: appleSnd},
    {word: "JET", imgSrc: jetImg, soundSrc: appleSnd},
    {word: "KITE", imgSrc: kiteImg, soundSrc: appleSnd},
    {word: "LADDER", imgSrc: ladderImg, soundSrc: appleSnd},
    {word: "MONKEY", imgSrc: monkeyImg, soundSrc: appleSnd},
    {word: "NUT", imgSrc: nutImg, soundSrc: appleSnd},
    {word: "OCTOPUS", imgSrc: octopusImg, soundSrc: appleSnd},
    {word: "PIG", imgSrc: pigImg, soundSrc: appleSnd},
    {word: "QUIET", imgSrc: quietImg, soundSrc: appleSnd},
    {word: "RABBIT", imgSrc: rabbitImg, soundSrc: appleSnd},
    {word: "SNAKE", imgSrc: snakeImg, soundSrc: appleSnd},
    {word: "TRUCK", imgSrc: truckImg, soundSrc: appleSnd},
    {word: "UNICORN", imgSrc: unicornImg, soundSrc: appleSnd},
    {word: "VACUUM", imgSrc: vacuumImg, soundSrc: appleSnd},
    {word: "WORM", imgSrc: wormImg, soundSrc: appleSnd},
    {word: "XYLOPHONE", imgSrc: xylophoneImg, soundSrc: appleSnd},
    //{word: "YO-YO", imgSrc: yoyoImg, soundSrc: appleSnd},
    //{word: "ZOO", imgSrc: zooImg, soundSrc: appleSnd}
    //SET THREE
    {word: "ASTRONAUT", imgSrc: astronautImg, soundSrc: appleSnd},
    {word: "BEAR", imgSrc: bearImg, soundSrc: appleSnd},
    {word: "CAKE", imgSrc: cakeImg, soundSrc: appleSnd},
    {word: "DRUM", imgSrc: drumImg, soundSrc: appleSnd},
    {word: "EAT", imgSrc: eatImg, soundSrc: appleSnd},
    {word: "FISH", imgSrc: fishImg, soundSrc: appleSnd},
    {word: "GRAPES", imgSrc: grapesImg, soundSrc: appleSnd},
    {word: "HAND", imgSrc: handImg, soundSrc: appleSnd},
    {word: "IGLOO", imgSrc: iglooImg, soundSrc: appleSnd},
    {word: "JACKET", imgSrc: jacketImg, soundSrc: appleSnd},
    {word: "KICK", imgSrc: kickImg, soundSrc: appleSnd},
    {word: "LEMON", imgSrc: lemonImg, soundSrc: appleSnd},
    {word: "MILK", imgSrc: milkImg, soundSrc: appleSnd},
    {word: "NEST", imgSrc: nestImg, soundSrc: appleSnd},
    {word: "ORANGE", imgSrc: orangeImg, soundSrc: appleSnd},
    {word: "PUMPKIN", imgSrc: pumpkinImg, soundSrc: appleSnd},
    //{word: "QUILT", imgSrc: quiltImg, soundSrc: appleSnd},
    {word: "RAIN", imgSrc: rainImg, soundSrc: appleSnd},
    {word: "STAR", imgSrc: starImg, soundSrc: appleSnd},
    {word: "TURTLE", imgSrc: turtleImg, soundSrc: appleSnd},
    {word: "UMBRELLA", imgSrc: umbrellaImg, soundSrc: appleSnd},
    {word: "VAN", imgSrc: vanImg, soundSrc: appleSnd},
    {word: "WHALE", imgSrc: whaleImg, soundSrc: appleSnd},
    {word: "FOX", imgSrc: foxImg, soundSrc: appleSnd},
    //{word: "YARN", imgSrc: yarnImg, soundSrc: appleSnd},
    {word: "ZIPPER", imgSrc: zipperImg, soundSrc: appleSnd}
]

export default gameData