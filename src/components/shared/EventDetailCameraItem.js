import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class EventDetailCameraItem extends Component {
    render() {
        const {selectedButton, cameraName, cameraType} = this.props;

        return (
          <TouchableOpacity 
          style={styles.buttonItem}
          onPress={() => selectedButton()}
          >
            <Text style={styles.cameraName}  numberOfLines={2}>{cameraName}</Text>
            <View style={styles.iconView}>
              <Icon size ={20} name={'cams-landing'} color={colors.gray}/>
              <Text style={styles.text}>{cameraType}</Text>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  buttonItem: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor: colors.lightGray,
    padding: 10,
    margin:5
  },
  iconView: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',   
    paddingTop:5
  },
  cameraName: {
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: '600',
    color:colors.black,
    textAlign:"center"
  },
  text: {
    fontSize: 15,
    backgroundColor: 'transparent',
    fontWeight: '600',
    color:colors.gray,
    paddingLeft: 5
  },
});