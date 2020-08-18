import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';

import { colors, EventMenus } from '../../common/constants.js';
import CustomMenu from './CustomMenu';
import MyEventInfoBar from './MyEventInfoBar.js';

class MyEventItem extends React.Component {

    constructor(props) {
        super(props);
    }

    navigateDetail() {
      this.props.navigation.push("EventDetail", {
          data: this.props.data
      });
    }

    selectMenuItem = (index) => {

    }

    renderContent() {
      const {data} = this.props;
      return (
          <View style={styles.leftContainer}>
            <Image
              style={styles.image}
              source={{uri: data.avatar.url}}
            />
            <View style={styles.liveStyleContainer}>
              <Text style={styles.liveStyle}>{data.state === 'RUNNING' ? 'Live': null}</Text>
            </View>
          </View>
      )
    }

    renderTextContent() {
      const {data} = this.props;
      return (
          <View style={styles.rightContainer}>
            <View style={styles.textContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{data.title}</Text>
                <Text style={styles.description} numberOfLines={2}>
                  {data.description}
                </Text>
              </View>
              <CustomMenu menus={EventMenus} selectItem={this.selectMenuItem}/>
            </View>
            <MyEventInfoBar data={[data.actualStartTime, data.totalView, data.streams.length]} />
          </View>
      )
    }

    renderInfoBar() {

    }

    render() {
        const {data} = this.props;

        return (
          data ?
              <TouchableOpacity
                style={styles.container}
                onPress={() => this.navigateDetail()}
              >
                {this.renderContent()}
                {this.renderTextContent()}
            </TouchableOpacity>
            : null
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#E8E4E3',
  },
  leftContainer: {
    flex:1,
  },
  rightContainer: {
    flex:1,
  },
  textContainer: {
    flex:1,
    flexDirection:'row',
    paddingBottom: 0,
    marginBottom: 10,
  },
  nameContainer: {
    flex:1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around'
  },
  image: {
    flex:1,
    resizeMode: 'cover'
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
  moreDetail: {
    alignItems: 'flex-end',
    padding: 10,
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

  buttonItem: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginLeft: 8,
    color: colors.gray
  },
  menuOption: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});

export default withNavigation(MyEventItem);