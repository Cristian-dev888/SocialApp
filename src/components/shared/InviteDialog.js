import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle } from 'react-native-popup-dialog';

import FormInput from '../../components/shared/FormInput';
import { commonStyles } from '../../common/styles';
import { colors, Icon } from '../../common/constants';
import InviteButton from '../buttons/InviteButton';

class InviteDialog extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
          <Dialog
            dialogStyle={{ position: 'absolute', bottom: 0 }}
            visible={this.props.open ? true:false}
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
                  <View style={styles.closeButtonContainer}>
                      <Text style={styles.text}>Invite the Friends</Text>
                      <TouchableOpacity 
                      style={styles.closeButton}
                      onPress={() => this.props.closeDialog()}
                      >
                        <Icon size ={20} name={'menu-close'} color={colors.darkGray}/>
                      </TouchableOpacity>
                  </View>
                  <View style={commonStyles.subContainer}>
                    <View style={commonStyles.margin15}>
                      <FormInput autoFocus={false} onChangeText={text => { }} placeholder={'Email'} security={false}/>
                    </View>
                    <View style={commonStyles.marginTop20}></View>
                    <InviteButton selectedButton={this.selectInviteBtn} active={this.auth ? true: false} color={colors.gray}/>
                  </View>
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
  },
  closeButtonContainer: {
    flexDirection: 'row'
  },
  text:{
    flexDirection: 'row',
    padding:20,
    fontSize: 25,
    fontWeight: '700',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  closeButton: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});


export default InviteDialog;