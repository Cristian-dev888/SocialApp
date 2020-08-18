import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, DialogContent,  } from 'react-native-popup-dialog';

import FormInput from '../../components/shared/FormInput';
import { commonStyles } from '../../common/styles';
import { colors, Icon } from '../../common/constants';
import LoginButton from '../buttons/LoginButton';
import DropDown from './DropDown';

class AddCameraDialog extends Component {
    constructor(props) {
        super();
        this.state ={
          positionData:[{value: 'Front'}, {value:'Rear'}],
          brandData:[{value: 'brand1'}, {value:'brand2'}],
        }
    }

    render() {
        return (
          <Dialog
            dialogStyle={{ position: 'absolute', bottom: 0 }}
            visible={this.props.open ? true : false}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            onTouchOutside={() => {
              this.props.closeDialog()
            }}
            width={1}
            rounded={false}
          >
            <DialogContent>
              <View style={styles.container}>
                  <Text style={styles.text}>Add Camera</Text>
                  <View style={commonStyles.marginTop20}></View>
                  <Text style={styles.detailTitle}>Name</Text>
                  <View style={commonStyles.marginTop10}></View>
                  <FormInput autoFocus={false} onChangeText={text => { }} placeholder={'Other Camera'} security={false}/>
                  <View style={commonStyles.marginTop10}></View>
                  <Text style={styles.detailTitle}>Position</Text>
                  <View style={commonStyles.marginTop10}></View>
                  <DropDown data={this.state.positionData}/>
                  <View style={commonStyles.marginTop10}></View>
                  <Text style={styles.detailTitle}>Brand</Text>
                  <View style={commonStyles.marginTop10}></View>
                  <DropDown data={this.state.brandData}/>
                  <View style={commonStyles.marginTop20}></View>
                  <LoginButton selectedButton={this.login} iconName={'add-camera'} buttonName={'Add Camera'}/>
              </View>
            </DialogContent>
          </Dialog>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  text:{
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: '700',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  detailTitle:{
    fontSize: 18,
    fontWeight: '600',
  },
  dropDown: {

  }
});


export default AddCameraDialog;