import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class LoginButton extends Component {
    render() {
        const {selectedButton, iconName, buttonName, backColor, iconColor} = this.props;

        return (
          <TouchableOpacity 
          style={[styles.buttonItem, backColor? {backgroundColor: backColor}: null]}
          onPress={() => selectedButton()}
          > 
          {
            iconName?
            <Icon style={styles.icon} size ={20} name={iconName} color={iconColor? iconColor : colors.gray}/>
            : null
          }
          
            <Text style={[styles.text, iconColor? {color:iconColor} : null]}>{buttonName}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.gray
  },
  text: {
      fontSize: 20,
      backgroundColor: 'transparent',
      fontWeight: '700',
      marginLeft: 8,
      color:colors.gray,
  },
  icon: {
    justifyContent: 'flex-end',
      alignItems: 'flex-end',
  }
});
