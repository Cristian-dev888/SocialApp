import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Icon, colors} from '../../common/constants';

class HeaderRight extends React.Component {
  navigationToSearch = () => {
    this.props.navigation.navigate('Search')
  }

  showNotifications = () => {

  }
  
  showMenu = () => {
    this.props.navigation.openDrawer();
  }

  renderBadge = () => {
    const {hasNewNoti} = this.props;
    
    if (!hasNewNoti) {
      return (
        <Icon size ={20} name="nortification" /> 
      )
    } else {
      return (
        <View style={styles.badgeContainer}>
          <Icon size ={20} name="nortification-active" color={colors.primary} />
          <Text style={styles.badgeIcon}>5</Text>
        </View>
      )
    }
  }

  render() {
    

    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[styles.headerIcon]}
          onPress={() => this.navigationToSearch()}
        >
          <Icon size ={20} name="main-search" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerIcon]}
          onPress={() => this.showNotifications()}
        > 
          {this.renderBadge()}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuIcon]}
          onPress={() => this.showMenu()}
        >
          <Icon size ={20} name="menu" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    paddingRight: 20,
  },
  menuIcon: {
    paddingRight: 10,
  },
  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: -10,
    backgroundColor: colors.primary,
    borderRadius:10,
    color: colors.white,
    textAlign: 'center'
  }
});
export default withNavigation(HeaderRight);