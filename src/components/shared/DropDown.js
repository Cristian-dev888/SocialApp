import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { colors, Icon } from '../../common/constants';
import FormInput from '../shared/FormInput';

class DropDown extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
          <View style={{flex:1}}>
            <Dropdown
              label=''
              inputContainerStyle={styles.dropdown}
              rippleCentered = {true}
              data={this.props.data}
              rippleOpacity={0}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  dropdown: {
    flex:1,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.gray,
    paddingLeft: 10,
    paddingTop:0,
    justifyContent: 'center'
  },
});


export default DropDown;