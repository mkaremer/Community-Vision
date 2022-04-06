import React from 'react';
import '../App.css';
import Settings from './Settings'
import pic from './settings.png'
import Card from '@material-ui/core/Card';
/*
* SettingsPage.js
* Settings page header when pressing gear icon in nav or when pressing 'Play Games!' button in home
*/
function SettingsPage(props) {
    return (
        <div style={{
            height: '86vh',
            marginTop: '-1.5vh',
            backgroundColor: 'white'
        }}>
            <Card>
                <h1 style={{ fontSize: '6vh', marginTop: '2vh', marginBottom: '0', userSelect: 'none' }}>
                    <img style={{ height: '5vh', margin: 0 }} src={pic} alt={pic}></img>
                    Settings
                </h1>
            </Card>
            <Settings updateSettingsPageState={props.updateAppState}
                updateNavState={() => void 0} />
        </div>
    );
}


export default SettingsPage;