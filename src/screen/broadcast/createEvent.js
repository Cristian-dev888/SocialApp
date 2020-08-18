import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from 'react-native-check-box';

import { commonStyles } from '../../common/styles';
import BackButton from '../../components/buttons/BackButton';
import MyEventTopBar from '../../components/shared/MyEventTopBar';
import FormInput from '../../components/shared/FormInput';
import { colors, Icon } from '../../common/constants';
import CameraListItem from '../../components/shared/CameraListItem';
import LoginButton from '../../components/buttons/LoginButton';
import SmallButton from '../../components/buttons/SmallButton';
import AddCameraDialog from '../../components/shared/AddCameraDialog';
import EventItem from '../../components/shared/EventItem';

class CreateEventScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        selectedLeader: true,
        descriptionValue: '',
        addedCamera: false,
        scheduled: false,
        openAddCameraDialog: false,
        defaultCameraData: {name: 'Use default camera', position: 'Front', title: 'Football Match'},
        addedCameraData:[],
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

    selectedLeaderBtn= (value) => {
      this.setState({
        selectedLeader:value
      })
    }

    pressBackButton = () => {
      this.props.navigation.navigate('View Events');
    }

    changeName = (text) => {

    }

    changeDescription = (text) => {
      this.setState({
        descriptionValue: text
      })
    }

    browse = () => {

    }

    changeLocation = () => {

    }

    openAddCameraDialog= () => {
      this.setState({
        openAddCameraDialog:true
      })
    }

    closeAddCameraDialog = () => {
      this.setState({
        openAddCameraDialog:false
      })
    }

    golive = () => {

    }
    
    renderEventDetail() {
      return (
        <View>
          <Text style={styles.detailTitle}>Event Detail</Text>
          <View style={commonStyles.marginTop10}></View>
          {this.state.selectedLeader ?
          <View>
            <FormInput autoFocus={false} onChangeText={this.changeName} placeholder={'Event Name'} security={false}/>
            <View style={commonStyles.marginTop10}></View>
            <View style={styles.descriptionContainer}>
              <TextInput
                placeholder={'Description'}
                value={this.state.descriptionValue}
                onChangeText={this.changeDescription}
                style={styles.textDescription}
                multiline={true}
                numberOfLines={3}
              />
            </View>
          </View>
          :
          <EventItem data={this.state.events.result[0]} menus={null} type={2} active={false}/>
          }
        </View>
      )
    }

    renderDefaultCamera() {
      return (
        <View>
          <Text style={styles.detailTitle}>Cameras</Text>
          <View style={commonStyles.marginTop10}></View>
          <Text style={[styles.detailTitle, {fontSize: 13}]}>Detected Camera</Text>
          <View style={commonStyles.marginTop10}></View>
          <CameraListItem type={1} data={this.state.defaultCameraData} selectEditButton={this.selectEditButton}/>
        </View>
      )
    }

    renderAdvanceOptions() {
      return (
        <View>
          <Text style={styles.detailTitle}>Advance Options</Text>
          <View style={commonStyles.marginTop10}></View>
          <View style={styles.browseStyle}>
            <SmallButton
              active={true} 
              selectedButton={this.browse} 
              iconName={'browse'} 
              iconColor={colors.gray} 
              buttonContent={'Browse'} 
              iconSize={25} 
              iconStyle={styles.buttonItem}
              textStyle={styles.text}
            />
          </View>
          <View style={commonStyles.marginTop10}></View>
          <FormInput autoFocus={false} onChangeText={this.changeLocation} placeholder={'Kuala Lumpur, My'} security={false} iconName={'event-location'}/>
        </View>
      )
    }

    renderGoLive() {
      return (
        <View>
          <View style={commonStyles.marginTop20}></View>
          <LoginButton selectedButton={this.golive} iconName={'golive'} buttonName={'Golive'} backColor={colors.primary} iconColor={colors.white}/>
          <View style={commonStyles.marginBottom20}></View>
        </View>
      )
    }

    renderSchedule() {
      return (
        <View>
          <CheckBox
            rightTextStyle={styles.checkBoxStyle}
            checkedImage={<Icon size={20} name={'camera-check-box-tick'} color={colors.gray}/>}
            unCheckedImage={<Icon size={20} name={'schedule-check-box'} color={colors.gray}/>}
            isChecked={this.state.scheduled}
            onClick={() => this.setState({scheduled: !this.state.scheduled})}
            rightText={'Schedule Event'}
          />
          {
            this.state.scheduled ?
            <View>
              <View style={commonStyles.marginTop10}></View>
              <Text style={styles.detailTitle}>Schedule</Text>
              <View style={commonStyles.marginTop10}></View>
              <View style={styles.timeInput}>
                <FormInput autoFocus={false} onChangeText={this.changeDate} placeholder={'D / M/ Y'} security={false} iconName={'schedule-date'}/>
                <View style={styles.timeInputPadding}></View>
                <FormInput autoFocus={false} onChangeText={this.changeLocation} placeholder={'Time'} security={false} iconName={'schedule-time'}/>
              </View>
              <View style={commonStyles.marginTop10}></View>
              <FormInput autoFocus={false} onChangeText={this.changeLocation} placeholder={'Durations'} security={false} />
              <View style={commonStyles.marginTop20}></View>
              <LoginButton selectedButton={this.login} iconName={'schedule'} buttonName={'Schedule'}/>
            </View>
            :
            <View>{this.renderGoLive()}</View>
          }
        </View>
      )
    }

    render() {
        return (
            <View style={commonStyles.flexCotainer}>
              <ScrollView>
                <View style={styles.headerContainer}>
                  <View style={styles.backButtonContainer}>
                    <BackButton selectedButton={this.pressBackButton} textContent={'Back'} />
                  </View>
                    <Text style={styles.headerTitle}>Create Event Leader</Text>
                  </View>
                  <MyEventTopBar selectedLeader={this.state.selectedLeader} selectedLeaderBtn={this.selectedLeaderBtn}/>
                  <View style={styles.detailContainer}>
                    {this.renderEventDetail()}
                    <View style={commonStyles.marginTop20}></View>
                    {this.renderDefaultCamera()}
                    <View style={commonStyles.marginTop20}></View>
                    {
                      this.state.addedCamera?
                      <View>
                        <View style={commonStyles.divide}></View>
                        <FlatList
                        data={this.state.dataList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return <CameraListItem type={1} data={this.state.addedCameraData[index]} selectEditButton={this.selectEditButton} selectDeleteBtn={this.selectDeleteBtn}/>
                        }}
                        />
                        <View style={commonStyles.marginTop20}></View>
                      </View>
                      :
                      null
                    }
                    <LoginButton selectedButton={this.openAddCameraDialog} iconName={''} buttonName={'Add Camera'}/>
                    <View style={commonStyles.marginTop20}></View>
                    {
                      this.state.selectedLeader?
                      <View>
                        {this.renderAdvanceOptions()}
                        <View style={commonStyles.marginTop20}></View>
                        {this.renderSchedule()}
                      </View>
                      : 
                      <View>{this.renderGoLive()}</View>
                    }
                  </View>
                  <AddCameraDialog open={this.state.openAddCameraDialog} closeDialog={this.closeAddCameraDialog}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    alignItems: "center"
  },
  backButtonContainer: {
    justifyContent: 'flex-start',
    padding: 15,
  },
  headerTitle:{
    flexDirection: 'row',
    fontSize: 22,
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center',  
    padding:15
  },
  detailContainer:{
    flex:1,
    padding: 15
  },
  detailTitle:{
    fontSize: 18,
    fontWeight: '600',
  },
  descriptionContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  textDescription: {
    height: 100,
    fontSize: 15,
    color: colors.gray,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },
  browseStyle: {
    borderWidth:1,
    borderColor: colors.gray,
    borderRadius: 5,
    padding: 30
  },
  buttonItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 8,
    color: colors.gray
  },
  checkBoxStyle: {
    fontSize: 20,
    color: colors.gray
  },
  timeInput: {
    flexDirection: 'row',
  },
  timeInputPadding: {
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default CreateEventScreen;