import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar }  from 'react-native-scrollable-tab-view-universal';
import { colors, Icon } from '../../common/constants';
import EventDetailCameraItem from '../shared/EventDetailCameraItem';

class EventDetailBottomView extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      dataList:[1,2,3,4,5,6],
      tabs:[1,2,3,4,5,6],
      currentTabIndex:0
    }
    this.tabref;
  }

  handleChangeTab = ({i, ref, from}) => {
    this.setState({
      currentTabIndex:i
    })
  }

  slideLeft = () => {
    if (this.state.currentTabIndex > 0)
      this.tabref.goToPage(this.state.currentTabIndex - 1)
  }

  slideRight = () => {
    if (this.state.currentTabIndex < this.state.tabs.length - 1)
      this.tabref.goToPage(this.state.currentTabIndex + 1)
  }

  renderTab = (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
    let imageUri = '../../../resources/img/bob.png'
    return (     
      <TouchableOpacity
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={styles.tabStyle}
      >
        <View style={[styles.profileContainer, isTabActive? styles.borderActive: styles.borderNonActive]}>
          <Image style={styles.profile} source={require(imageUri)}/>       
        </View>
        <Text style={isTabActive? styles.activeName: styles.nonActiveName}>{'Guest'}</Text>
      </TouchableOpacity>
    )
  }

  render() {

    const child = this.state.tabs.map((i) => {
      return (
        <FlatList
          key={i}
          style={styles.camList}
          data={this.state.dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return <EventDetailCameraItem cameraName={'Final Football Match in 2019'} cameraType={'Front 1'}/>
          }}
          numColumns={3}
        >
        </FlatList>
      )
    });

    return (
      <View style={styles.cotainer}>
          <View style={styles.slideContainer}>
            <TouchableOpacity 
              style={styles.leftSlideBtn}
              onPress={this.slideLeft}
              >
              <Icon size ={20} name={'cam-previous'} color={colors.gray}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.rightSlideBtn}
              onPress={this.slideRight}
              >
              <Text style={styles.broadCaster}>8 Broadcaster</Text>
              <Icon size ={20} name={'cam-next'} color={colors.gray}/>
            </TouchableOpacity>
          </View>
          <ScrollableTabView
            ref={(ref) => this.tabref = ref}
            style={styles.scrollTab}
            initialPage={0}
            scrollWithoutAnimation={true}
            renderTabBar={() => <ScrollableTabBar style={{borderWidth: 0, height: 150}} renderTab={this.renderTab} underlineStyle={styles.triangle}/>}
            onChangeTab={this.handleChangeTab}
          >
            {child}
        </ScrollableTabView>
        <TouchableOpacity 
          style={styles.cameraDown}
          onPress={this.slideRight}
          >
          <Text style={styles.broadCaster}>12 cams</Text>
          <Icon size ={20} name={'camera-down-arrow'} color={colors.gray}/>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  cotainer: {
    flex:1,
    paddingBottom: 10,
  },
  slideContainer:{
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20
  },
  leftSlideBtn: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rightSlideBtn:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  broadCaster: {
    color: colors.gray,
    paddingRight: 10
  },
  tabStyle: {
    width: 100,
    borderBottomColor: colors.primary,
    borderBottomWidth:1, 
    padding:20,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollTab: {
    paddingTop: 0
  },
  camList:{
    padding: 10
  },
  profileContainer: {
    width:80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderActive: {
    borderColor: colors.primary
  },
  borderNonActive: {
    borderColor: 'transparent'
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 60/2,
  },
  activeName:{
    color: colors.primary
  },
  nonActiveName: {
    color: colors.gray
  },
  triangle: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderColor: colors.primary, 
    borderStyle: 'solid',
    borderWidth:1,
    transform: [{rotate: '45deg'}],
    bottom:-7.5,
    marginLeft: 40
  },
  cameraDown:{
    flexDirection: 'row',
    position: 'absolute',
    top: 170,
    right: 15
  }
});

export default EventDetailBottomView;
