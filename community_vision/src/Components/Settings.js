import React, { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider';
import volumeDown from '../Components/Assets/Images/noSound.png';
import volumeUp from '../Components/Assets/Images/sound.png';
import hare from '../Components/Assets/Images/hare.png';
import tortoise from '../Components/Assets/Images/tortoise.png';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { Buttons, initial } from "./Games/Common/Functions";
import { Link } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Block from 'react-color/lib/components/block/Block';


const Settings = forwardRef((props, ref) => {

    const history = useHistory();
    function moveTo(input) {
        history.push(input);
    }

    const [volume, setVolume] = useState(() => initial('volume'));
    const changeVolume = (event, newValue) => {
        localStorage.setItem('volume', newValue);
        setVolume(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [size, setSize] = useState(() => initial('size'));
    const changeSize = (event, newValue) => {
        localStorage.setItem('size', newValue);
        setSize(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [speed, setSpeed] = useState(() => 4.5 - initial('speed'));
    const changeSpeed = (event, newValue) => {
        localStorage.setItem('speed', (4.5 - newValue).toFixed(1));
        setSpeed(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [backgroundColor, setBackgroundColor] = useState(() => initial('backgroundColor'));
    const changeBackgroundColor = (newValue) => {
        localStorage.setItem('backgroundColor', newValue);
        setBackgroundColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [dotButtonColor, setDotButtonColor] = useState(() => initial('dotButtonColor'));
    const changeDotButtonColor = (newValue) => {
        localStorage.setItem('dotButtonColor', newValue);
        setDotButtonColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [dashButtonColor, setDashButtonColor] = useState(() => initial('dashButtonColor'));
    const changeDashButtonColor = (newValue) => {
        localStorage.setItem('dashButtonColor', newValue);
        setDashButtonColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const [fontColor, setFontColor] = useState(() => initial('fontColor'));
    const changeFontColor = (newValue) => {
        localStorage.setItem('fontColor', newValue);
        setFontColor(newValue);
        props.updateNavState(newValue);
        props.updateSettingsPageState(newValue);
    };
    const fSize = size + 'vh';
    const fMargin = -size / 4 + 'vh';
    const isChecked = (type, color) => {
        if (type === color) {
            return true;
        } else if (type === 'theme') {
            if (color === 'default' && backgroundColor === '#e8e8e8' && fontColor === 'black' && dotButtonColor === 'yellow' && dashButtonColor === 'red') {
                return true;
            }
        }
        return false;
    };

    const backgroundPreview = {
        rectangle: {
            width: '1000px',
            height: '600px',
            color: 'black',
            background: backgroundColor,
            margin: '50px',
            zIndex: 3
        }
    };

    

    var playGames = <div></div>;
    if (window.location.href.slice(-8) === 'settings') {
        playGames =
            <div>
                <Grid item style={{ paddingTop: '5vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
                    <Card onMouseUp={() => {
                        moveTo('/games');
                    }}>
                        <CardActionArea>
                            <button style={{
                                width: '100%',
                                height: '100%',
                                fontSize: '5vh',
                                textDecoration: 'none',
                                background: 'white',
                                borderColor: 'blue',
                                borderWidth: "1.5vh",
                                fontWeight: 900
                            }}>
                                Play Games!
            </button>
                        </CardActionArea>
                    </Card>
                </Grid>
            </div>
    }

    const dotPreview = {
        rectangle: {
            width: '300px',
            height: '120px',
            color: 'black',
            background: dotButtonColor,
            marginTop: '-500px',
            marginLeft: '-60px',
            zIndex: 5
        }
    };

    const dashPreview = {
        rectangle: {
            width: '300px',
            height: '120px',
            color: 'black',
            background: dashButtonColor,
            marginTop: '-500px',
            marginLeft: '20px',
            zIndex: 5
        }
    };

    const blankSpace = {
        rectangle: {
            width: '100px',
            height: '120px',
            color: 'black'
        }
    };

    useImperativeHandle(
        ref,
        () => ({
            update() {
                setVolume(initial('volume'));
                setSize(initial('size'));
                setSpeed(initial('speed'));
                setBackgroundColor(initial('backgroundColor'));
                setDashButtonColor(initial('dashButtonColor'));
                setDotButtonColor(initial('dotButtonColor'));
                setFontColor(initial('fontColor'));
            }
        }),
    )

    return (
        <div style={{
            marginTop: '1.5vh',
            top: '0vh',
            marginBottom: '2vh',
            width: '100vw'
        }}>
            <Card borderRadius='1vh'>
                <Grid style={{ marginBottom: '40vh', paddingTop: '50px'}} container> 
                
                    <Grid style={{ marginLeft: '2px' }} container direction='column' xs={6} spacing={1}> 
                    
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Game Volume</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-1vh' }}>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={volumeDown} alt="volumeDown" id="volumeDownimg" width="15" height="20"></img>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={volume} onChange={changeVolume}
                                        valueLabelDisplay='auto' marks
                                        step={10} min={0} max={100}
                                        scale={x => x + '%'} />
                                </Grid>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={volumeUp} alt="volumeUp" id="volumeUpimg" width="20" height="20"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Game Speed</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-1vh' }}>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={tortoise} alt="tortoise" id="tortoiseimg" width="20" height="20"></img>
                                </Grid>
                                <Grid item xs={10}>
                                    <Slider value={speed} onChange={changeSpeed}
                                        valueLabelDisplay="auto" marks
                                        step={0.2} min={0.5} max={4}
                                        scale={x => (4.5 - x).toFixed(1)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <img style={{ cursor: 'default', userSelect: 'none' }} src={hare} alt="hare" id="hareimg" width="20" height="20"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' }}>Text Size</h1>
                            <Grid container spacing={0} alignItems='center' style={{ marginTop: '-2vh' }}>
                                <Grid item xs={1} />
                                <Grid item xs={10}>
                                    <Slider value={size} onChange={changeSize}
                                        valueLabelDisplay='auto' marks
                                        step={1} min={19} max={29} />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={2} />
                                <Grid item xs={4}>
                                    <h1 style={{ fontSize: fSize, margin: fMargin, cursor: 'default', userSelect: 'none', paddingTop: 200}}>A</h1>
                                </Grid>
                                <Grid item xs={4}>
                                    <h1 style={{ fontSize: fSize, margin: fMargin, cursor: 'default', userSelect: 'none' , paddingTop: 200}}>a</h1>
                                </Grid>
                                <div style={backgroundPreview.rectangle}></div>
                                <div style={blankSpace.rectangle}></div>
                                <div style={dashPreview.rectangle}></div>
                                <div style={blankSpace.rectangle}></div>
                                <div style={blankSpace.rectangle}></div>
                                <div style={blankSpace.rectangle}></div>
                                <div style={dotPreview.rectangle}></div>
                                <Grid item xs={2} />
                            </Grid>
                        </Grid>
                        {playGames}
                    </Grid>
                    <Grid style={{ marginLeft: '2px' }} container direction='column' xs={6} spacing={1}>
                        <Grid item>
                            <Grid container direction='row' alignItems='center' justify='center'>
                                <Grid item>
                                    <input style={{ cursor: 'pointer'  }} checked={isChecked('theme', 'default')} type="radio" id="defaultTheme" name="theme" value="default"
                                        onClick={() => {
                                            changeBackgroundColor('#e8e8e8');
                                            changeFontColor('black');
                                            changeDotButtonColor('yellow');
                                            changeDashButtonColor('red');
                                        }} />
                                </Grid>
                                <Grid item>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplate: '1fr 1fr / 1fr',
                                        gridTemplateAreas: '"1" "2"',
                                        width: '6vh',
                                        height: '6vh',
                                        marginBottom: '-1vh'
                                    }} onClick={function () {
                                        changeBackgroundColor('#e8e8e8');
                                        changeFontColor('black');
                                        changeDotButtonColor('yellow');
                                        changeDashButtonColor('red');
                                    }}>
                                        <button style={{ gridArea: '1', backgroundColor: '#e8e8e8', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                        <button style={{ gridArea: '1', backgroundColor: 'black', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer'  }} />
                                        <button style={{ gridArea: '2', backgroundColor: 'yellow', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                        <button style={{ gridArea: '2', backgroundColor: 'red', width: '3vh', height: '3vh', borderStyle: 'solid', cursor: 'pointer' }} />
                                    </div>
                                </Grid>
                                <Grid item>
                                    <h1 style={{ marginTop: '1vh', marginBottom: '-0.5vh', cursor: 'pointer', userSelect: 'none' }} onClick={function () {
                                        changeBackgroundColor('#e8e8e8');
                                        changeFontColor('black');
                                        changeDotButtonColor('yellow');
                                        changeDashButtonColor('red');
                                    }}>Default</h1>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container xs={0} direction='column' alignItems='center'>
                            <h1 style={{ fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' , paddingTop: '50px', paddingBottom: '25px' }}>Background Color</h1>
                            <Grid container direction='column' style={{ marginTop: '-1vh'}}>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={backgroundColor} onColorChange={(value) => changeBackgroundColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ gridArea: '1', fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none', paddingTop: '50px', paddingBottom: '25px' }}>Dot Button Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={0} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={dotButtonColor} onColorChange={(value) => changeDotButtonColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ gridArea: '2', fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none' , paddingTop: '50px', paddingBottom: '25px'}}>Dash Button Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={0} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={dashButtonColor} onColorChange={(value) => changeDashButtonColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <h1 style={{ gridArea: '2', fontSize: '3vh', marginTop: '-0.2vh', cursor: 'default', userSelect: 'none', paddingTop: '50px' , paddingBottom: '25px'}}>Text Color</h1>
                            <Grid container direction='row' style={{ marginTop: '-1vh' }}>
                                <Grid container xs={0} direction='column' alignItems='center'>
                                    <Grid item>
                                        <ColorPicker style={{ cursor: 'pointer' }} color={fontColor} onColorChange={(value) => changeFontColor(value)} />
                                    </Grid>
                                    <Grid item>
                                        <p style={{ margin: -2, cursor: 'default', userSelect: 'none' }}></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </div >
    )
})

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        color: this.props.color
    };

    componentDidUpdate(prevProps) {
        if (this.props.color !== prevProps.color) {
            this.setState({ color: this.props.color })
        }
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.props.onColorChange(color.hex)
    };

    render() {

        const styles = reactCSS({
            'default': {
                color: {
                    width: '5vh',
                    height: '5vh',
                    borderRadius: '2px',
                    background: this.state.color,
                },
                swatch: {
                    background: '#fff',
                    borderRadius: '2px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    marginTop: '-250px',
                    marginLeft: '-180px',
                    zIndex: '10',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
                { this.state.displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <SketchPicker color={this.state.color} onChange={this.handleChange} />
                </div> : null}

            </div>
        )
    }
}


export default Settings;