import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class InviteButton extends Component {
    render() {
        const {selectedButton, active, color} = this.props;

        return (
          <TouchableOpacity 
          style={styles.buttonItem}
          onPress={() => selectedButton()}
          disabled={!active}>
            <Icon size ={20} name={'invite-friends'} color={color}/>
            <Text style={[styles.text, {color: color}]}>{'Invite Friends'}</Text>
            {color === colors.primary ?
              <Icon size ={20} name={'menu-invite-friend-arrow'} color={color}/>
              : null
            }
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    height: 50,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightGray
  },
  text: {
      fontSize: 20,
      backgroundColor: 'transparent',
      fontWeight: '700',
      paddingLeft: 15,
      paddingRight: 15
  },
});
