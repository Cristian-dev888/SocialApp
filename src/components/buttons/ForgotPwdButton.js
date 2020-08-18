import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class ForgotPwdButton extends Component {
    render() {
        const {selectedButton} = this.props;

        return (
          <TouchableOpacity 
          style={styles.buttonItem}
          onPress={() => selectedButton()}
          > 
            <Icon size ={15} name={'forgot-password'} color={colors.gray}/>
            <Text style={styles.text}>{'Forgot Password'}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: 140
  },
  text: {
    fontSize: 15,
    backgroundColor: 'transparent',
    color:colors.gray,
    paddingLeft: 10,
  },
});
