import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import EventItem from '../../components/shared/EventItem';
import ButtonBar from '../../components/header/TopButtonBar';
import LogoTitle from '../../components/header/LogoTitle';
import HeaderRight from '../../components/header/HeaderRight';
import { EventMenus, mapStateToProps } from '../../common/constants';

class FavoriteListScreen extends React.Component {
  static navigationOptions = {
      headerTitle: <LogoTitle />,
      headerRight: <HeaderRight hasNewNoti={true}/>,
  };

    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
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

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let arrays = [];
        
        arrays.push("1")
        arrays.push("2")
        arrays.push("3")
        arrays.push("4")

        this.setState( {
          dataList: arrays,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ButtonBar ref='buttonBar'/>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return <EventItem data={this.state.events.result[0]} menus={EventMenus} type={0} active={true}/>
                    }}
                >
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FavoriteListScreen;