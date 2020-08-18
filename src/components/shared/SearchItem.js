import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class SearchItem extends Component {
    render() {
        const {selectedButton, textContent} = this.props;

        return (
          <TouchableOpacity 
          style={styles.buttonItem}
          onPress={() => selectedButton()}
          >
            <View style={styles.textView}>
              <Text style={styles.text}>{textContent}</Text>
            </View>
            <View style={styles.iconView}>
              <Icon size ={15} name={'search-field-arrows'} color={colors.gray}/>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
    flex:1,
    flexDirection: 'row',
    height: 50,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',   
  },
  iconView: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',   
  },
  text: {
    fontSize: 20,
    backgroundColor: 'transparent',
    fontWeight: '600',
    color:colors.gray,
  },
});