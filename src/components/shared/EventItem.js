import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ViewMoreText  from 'react-native-view-more-text';

import EventInfoBar from './EventInfoBar';
import { colors, EventTopInfo, EventBottomInfo, EventDetailBottomInfo } from '../../common/constants.js';
import CustomMenu from './CustomMenu';

class EventItem extends React.Component {

    constructor(props) {
        super(props);
    }

    navigateDetail() {
      this.props.navigation.push("EventDetail", {
          data: this.props.data
      });
    }
    
    renderViewMore(onPress){
      return(
        <Text style={{color: colors.gray}} onPress={onPress}>More</Text>
      )
    }

    renderViewLess(onPress){
      return(
        <Text style={{color: colors.gray}} onPress={onPress}>Less</Text>
      )
    }

    selectMenuItem = (index) => {

    }

    renderAvatar() {
      const {data} = this.props
      
      return (
          <View style={styles.avatarContainer}>
            <Image style={styles.profile} source={{uri: data.avatar.url}}/>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{data.title}</Text>
              <ViewMoreText
                numberOfLines={2}
                renderViewMore={this.renderViewMore}
                renderViewLess={this.renderViewLess}
              >
                <Text style={styles.description}>
                  {data.description}
                </Text>
              </ViewMoreText>
            </View>
            {this.props.menus ? <CustomMenu menus={this.props.menus} selectItem={this.selectMenuItem}/> : null}
          </View>

      )
    }

    renderContent() {
      return (
          <View>
            <Image
              style={{height: 200}}
              source={{uri: 'https://www.gstatic.com/webp/gallery/2.jpg'}}
            />
            <View style={styles.liveStyleContainer}>
              {
              this.props.data.state === 'RUNNING'?
              <Text style={styles.liveStyle}>LIVE</Text>: null
              }
            </View>
          </View>
      )
    }

    renderBottom = () => {
      const {type, data} = this.props;

      return type ?
        <EventInfoBar type={1} data={[data.reactions, data.comments, data.streams.length]} icons={EventDetailBottomInfo}/>
        :
        <EventInfoBar type={1} data={[data.reactions, data.comments, data.streams.length]} icons={EventBottomInfo}/>
    }
    render() {
        const { data, type, active } = this.props;

        return (
          data ?
              <TouchableOpacity
                style={[styles.container, active? styles.border: null]}
                onPress={() => this.navigateDetail()}
                disabled={!active}
              >
                {this.renderAvatar()}
                <EventInfoBar type={0} data={[data.countryId, data.actualStartTime, data.totalView]} icons={EventTopInfo}/>
                {this.renderContent()}
                { type === 2 ? null : this.renderBottom()}
              </TouchableOpacity>
            : null
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  border: {
    borderBottomWidth: 5,
    borderColor: '#E8E4E3',
  },
  content: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0
  },
  avatarContainer: {
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    marginBottom: 10,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around'
  },
  name: {
    fontSize: 18,
    color: colors.black,
    fontWeight: '900'
  },
  description: {
    color: colors.subText,
    fontSize: 15,
  },
  profile: {
    backgroundColor: colors.black,
    height: 40,
    width: 40,
    borderRadius: 40/2
  },
  liveStyleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top:0,
    left:0,
    backgroundColor: colors.primary,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    paddingTop: 2,
  },
  liveStyle: {
    color: colors.white,
  },
});

export default withNavigation(EventItem);