import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, View, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux';

import { Icon, colors, DrawerListbuttons, mapStateToProps } from '../../common/constants';
import SmallButton from '../buttons/SmallButton';
import InviteButton from '../buttons/InviteButton';
import { commonStyles } from '../../common/styles';
import AuthenticationStorage from '../../helper/SecureStorage';
import Login from '../../screen/auth/login';
import Avatar from '../shared/Avatar';
import {openInviteDialog} from '../../state/actions';

class DrawerSettings extends Component {

    constructor() {
        super();
        this.auth = false;
        this.state = {
            events: {
                result: [
                {
                    actualEndTime: null,
                    actualStartTime: "2019/07/23 03:38:28",
                    totalView:125,           
                    reactions:'1.3 M',
                    comments:'42 K',
                    avatar:{          
                    url: "https://www.mansfieldtown.net/siteassets/image/2019---2020-season/1st-team-2019---2020/1st-team-pre-season/1st-team-pre-season-matches/hull-h/_bp12901.jpg/Medium",
                    },
                    countryId: "Malaysia",            
                    description: "testing",
                    eventTypeId: "5d00bbabc5d24516085151d5",            
                    eventTypeLevel: "SIMPLE",
                    id: "5d368133978a330301985f6a",            
                    joinCode: "190912",
                    ownerUser:{
                        email: null,
                        enabled: true,
                        id: "5d36808e978a330301985f61",
                        identity:{        
                            avatar: null,
                            birthDay: null,       
                            citizenshipCountryId: null,
                            contact: null,       
                            fullName: "mosaad ",
                            gender: null,
                            id: "5d36808e978a330301985f60",
                            maritalStatus: null,
                            name: "mosaad ",
                            nationalityCountryId: null,        
                            type: "PERSON"
                        },
                    },         
                    plannedEndTime: null,
                    plannedStartTime: "2019/07/23 03:38",
                    playerParticipants: {
                    avatar: null,
                    eventTypeId: "5d00bbabc5d24516085151d5",
                    id: "5d368130978a330301985f62",
                    playerStatus: "UNOFFICIAL",
                    playerType: "PERSON",
                    identity:{
                        avatar: null,
                        birthDay: null,
                        citizenshipCountryId: null,
                        contact: null,
                        fullName: "mosaad ",
                        gender: null,
                        id: "5d36808e978a330301985f60",
                        maritalStatus: null,
                        name: "mosaad ",
                        nationalityCountryId: null,
                        type: "PERSON",
                    },
                    },
                    state: "RUNNING",
                    streams:[
                    {
                    avatar: null,
                    camera:{
                        cameraBrand: "OTHER",
                        cameraDirection: "FRONT",
                        cameraMovementType: "MOVING",
                        cameraType: "Detected",
                        id: null,
                        uniqueKey: "camera 1",
                    },
                    cameraOwnerId: "5d368130978a330301985f62",
                    cameraOwnerType: "PERSON_PLAYER",
                    id: "5d368133978a330301985f67", 
                    srcStreamUrl:"rtmp://3.0.248.253:1935/de04596ee08d469c/e20e8eaf7a86469b",
                    status: "DISCONNECTED",
                    streamReporterUserEmail: null,
                    streamReporterUserId: "5d36808e978a330301985f61",
                    title: "camera 1",
                    watchingStreamBaseUrl: "https://5b48f8f32d3be.streamlock.net/de04596ee08d469c/ngrp:e20e8eaf7a86469b_all/manifest.mpd",
                    },
                    {
                    avatar: null,
                    camera:{
                        cameraBrand: "OTHER",
                        cameraDirection: "FRONT",
                        cameraMovementType: "MOVING",
                        cameraType: "Detected",
                        id: null,
                        uniqueKey: "camera 1",
                    },
                    cameraOwnerId: "5d368130978a330301985f62",
                    cameraOwnerType: "PERSON_PLAYER",
                    id: "5d368133978a330301985f67", 
                    srcStreamUrl:"rtmp://3.0.248.253:1935/de04596ee08d469c/e20e8eaf7a86469b",
                    status: "DISCONNECTED",
                    streamReporterUserEmail: null,
                    streamReporterUserId: "5d36808e978a330301985f61",
                    title: "camera 1",
                    watchingStreamBaseUrl: "https://5b48f8f32d3be.streamlock.net/de04596ee08d469c/ngrp:e20e8eaf7a86469b_all/manifest.mpd",
                    },
                    ],
                    title: "test case 1",
                    }
                ],
                totalPage: 1,
                totalRecord: 1
            }
        }
    }

    closeMenu = () => {
        this.props.navigation.closeDrawer();
    }

    selectedButtton = (index) => {

    }

    logOut = () => {
        AuthenticationStorage.getSingleInstance().setAuth(null, null).then(() => {
            this.props.navigation.closeDrawer();
        });
    }

    login = () => {
        this.props.navigation.closeDrawer();
    }

    goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    selectCamera = () => {

    }
    
    selectInviteBtn = () => {
      this.props.openInviteDialog(true);
      this.props.navigation.closeDrawer();
    }

    renderListButtons() {
        const listButtons = DrawerListbuttons.icons.map((iconName, i) => {
            let active = false;

            if (i > 2) {
                active = true;
            } else {
                active =  false; 
            }
            
            return <SmallButton 
                active={active}
                key={i}
                buttonIndex={i}
                selectedButton={this.selectedButtton}
                iconName={iconName}
                iconColor={DrawerListbuttons.iconColors[i]}
                buttonContent={DrawerListbuttons.buttons[i]} 
                iconSize={20} 
                iconStyle={styles.buttonItem}
                textStyle={styles.text}
            />
        })

        return listButtons;
    }

    render() {
        AuthenticationStorage.getSingleInstance().getAuth().then((logined) => {
            this.auth = logined;
        });
        
        return (
            <View style={styles.container}>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={() => this.closeMenu()}
                    >
                        <Icon size ={20} name={'menu-close'} color={colors.darkGray}/>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <KeyboardAvoidingView style={styles.loginView} >
                        <Avatar islogined={this.auth} name={this.state.events.result[0].title} imageUri={this.state.events.result[0].avatar.url} selectedCamera={this.selectCamera}/>
                        {this.auth ? null : <Login login={this.login} signUp={this.goToSignUp}/>}
                        <View style={styles.listButtonContainer}>
                            {this.renderListButtons()}
                        </View>
                        <View style={commonStyles.subContainer}>
                            <InviteButton selectedButton={this.selectInviteBtn} active={this.auth ? true: true} color={colors.primary}/>
                            <View style={commonStyles.marginBottom20}></View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
    },

    listButtonContainer: {
        flex: 1,
        paddingTop: 10,
    },
    closeButton: {
        marginRight: 15,
        marginTop: 15,
        width: 20,
        height: 20
    },
    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 10,
    },
    text: {
        fontSize: 20,
        backgroundColor: 'transparent',
        fontWeight: '500',
        marginLeft: 8,
        color: colors.black
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        openInviteDialog: (open) => {
            dispatch(openInviteDialog(open));
        }
    }
}

DrawerSettings.propTypes = {
    openInviteDialog: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerSettings);