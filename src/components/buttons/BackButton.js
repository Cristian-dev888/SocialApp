import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class BackButton extends Component {
    render() {
        const {textContent, selectedButton} = this.props;

        return (
          <TouchableOpacity 
          style={styles.buttonItem}
          onPress={() => selectedButton()}
          >
            <Icon size ={16} name={'back'} color={colors.darkGray}/>
            <Text style={styles.text}>{textContent}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',
  },
  text: {
      fontSize: 16,
      backgroundColor: 'transparent',
      fontWeight: '700',
      color:colors.darkGray,
      paddingLeft: 5,
  },
});
