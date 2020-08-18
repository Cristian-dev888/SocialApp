import React from 'react';
import {
  StyleSheet,
  Platform,
  FlatList,
  SectionList,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import SearchBar from '../../components/shared/SearchBar';
import { colors } from '../../common/constants';
import BackButton from '../../components/buttons/BackButton';
import SearchItem from '../../components/shared/SearchItem';
import ButtonBar from '../../components/header/TopButtonBar';
import MyEventItem from '../../components/shared/MyEventItem';

class SearchScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataList: [1,2,3,4],
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
      },
      searchText: '',
      showSearchList: false,
      searchTextList: [
        {'id':'1','value':'football'}, 
        {'id':'2','value':'footboose'},
        {'id':'3','value':'football vines'}, 
        {'id':'4','value':'football highlights'}, 
        {'id':'5','value':'football songs'},
        {'id':'6','value':'football skills'}, 
        {'id':'7','value':'footloose line dance'}, 
        {'id':'8','value':'foot massage'}, 
        {'id':'9','value':'footfungs music video'}
      ]
    }
  }

  componentDidMount() {
    this.getTextList();
  }

  getTextList() {
    
  }

  pressBackButton = () => {
    this.props.navigation.navigate('Main');
  }

  changeText =(text) => {
    this.setState({
      searchText: text,
      showSearchList: false
    })
  }

  selectSearchIcon = () => {
    this.setState({
      showSearchList: true
    })
  }

  selectedSearchItem = (item) => {
    this.setState({
      searchText:item.value,
      showSearchList: true
    })
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };
   

  render() {
    let A = this.state.searchTextList.slice(0, 6);
    let B = this.state.searchTextList.slice(6);

    A = A.filter(item => {
      const itemData = item.value.toLowerCase();
      const textData = this.state.searchText.toLowerCase();
      return itemData.indexOf(textData) > -1;
    })

    B = B.filter(item => {
      const itemData = item.value.toLowerCase();
      const textData = this.state.searchText.toLowerCase();
      return itemData.indexOf(textData) > -1;
    })

    return (
      <View style={styles.container}>
          <View style={styles.topBar}>
            <BackButton selectedButton={this.pressBackButton} textContent={''} />
            <SearchBar
              autoFocus={false}
              onChangeText={this.changeText}
              textInputValue = {this.state.searchText}
              onPressCancel={() => {
              }}
              onPress={this.selectSearchIcon}
            />
          </View>
          <KeyboardAvoidingView style={{flex:1}}>
            {
              this.state.showSearchList ?
              <View>
                <ButtonBar />
                <FlatList
                  data={this.state.dataList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return <MyEventItem data={this.state.events.result[0]}/>
                  }}
                >
                </FlatList>
              </View>
            : <SectionList
                style={styles.listView}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                sections={[
                  { title: 'Recent', data: A },
                  { title: 'Trend', data: B },
                ]}
                renderSectionHeader={({ section }) => (
                  this.state.searchText ? null : <Text> {section.title} </Text>
                )}
                renderItem={({ item }) => (
                  <SearchItem selectedButton={() => this.selectedSearchItem(item)} textContent={item.value}/>
                )}
                keyExtractor={(item, index) => index}
              />
            }
          </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        paddingTop: 15
      }
    }),
    flex: 1,
    backgroundColor: colors.white
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  listView: {
    padding: 10
  }
});

export default SearchScreen;