import React, {Component} from 'react';
import {StyleSheet, View, Text } from 'react-native';
import SocialButton from '../../components/buttons/SocialButton';
import LoginButton from '../../components/buttons/LoginButton';
import FormInput from '../../components/shared/FormInput';
import ForgotPwdButton from '../../components/buttons/ForgotPwdButton';
import { commonStyles } from '../../common/styles';
import AuthenticationStorage from '../../helper/SecureStorage';
import SmallButton from '../../components/buttons/SmallButton';
import { colors } from '../../common/constants';

class Login extends Component {
    constructor() {
        super();
        this.state = {
    
        };
    }
    
    login = () => {
      AuthenticationStorage.getSingleInstance().setAuth('admin', '123456').then(() => {
        this.props.login();
      });
    }

    selectedForgotPwdButton = () => {

    }

    changeUerName = (text) => {

    }

    changePassword = (text) => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[commonStyles.subContainer]}>
                  <Text style={styles.topText}>Sign in with</Text>
                  <SocialButton selectedButton={this.selectedSocialButton}/>
                </View>
                <View style={commonStyles.divide}></View>
                <View style={commonStyles.subContainer}>
                  <View style={commonStyles.margin15}>
                    <FormInput autoFocus={false} onChangeText={this.changeUerName} placeholder={'UserName'} security={false}/>
                    <View style={commonStyles.marginTop20}></View>
                    <FormInput autoFocus={false} onChangeText={this.changePassword} placeholder={'Password'}  security={true}/>
                  </View>
                  <View style={commonStyles.marginTop20}></View>
                  <View style={commonStyles.margin15}>
                    <LoginButton selectedButton={this.login} iconName={'login'} buttonName={'Login'}/>
                  </View>
                  <View style={commonStyles.marginTop40}></View>
                  <ForgotPwdButton selectedButton={this.selectedForgotPwdButton} />
                  <View style={commonStyles.marginBottom20}></View>
                </View>
                <SmallButton
                  active={true} 
                  selectedButton={this.props.signUp} 
                  iconName={'menu-about'} 
                  iconColor={colors.primary} 
                  buttonContent={'Create an Account'} 
                  iconSize={20} 
                  iconStyle={styles.buttonItem}
                  textStyle={styles.text}
                />
                <View style={commonStyles.divide}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topText: {
    padding: 10,
    fontSize: 15,
    alignSelf: 'center',
    color: colors.darkGray
  },
  buttonItem: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  text: {
    fontSize: 20,
    backgroundColor: 'transparent',
    fontWeight: '500',
    marginLeft: 8,
    color: colors.primary
  }
});


export default Login;