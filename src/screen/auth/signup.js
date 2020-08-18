import React, {Component} from 'react';
import {StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import LoginButton from '../../components/buttons/LoginButton';
import BackButton from '../../components/buttons/BackButton';
import FormInput from '../../components/shared/FormInput';
import { commonStyles } from '../../common/styles';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
    
        };
    }
    
    pressBackButton = () => {
      this.props.navigation.navigate('Main');
      this.props.navigation.openDrawer();
    }
    
    selectedForgotPwdButton = () => {

    }

    changeName = (text) => {

    }

    changeEmail = (text) => {

    }

    changePwd = (text) => {

    }

    changeConfirmPwd = (text) => {

    }
    
    render() {
        return (
            <View style={commonStyles.flexCotainer}>
                <View style={styles.backButtonContainer}>
                  <BackButton selectedButton={this.pressBackButton} textContent={'Back'} />
                </View>
                <ScrollView>
                  <KeyboardAvoidingView style={commonStyles.flexCotainer} >
                    <View style={styles.logoContainer}>
                      <Image style={{width:200, height: 200}} source={require('../../../resources/img/logo.png')} resizeMode='contain'/>
                    </View>
                    <View style={[commonStyles.subContainer, commonStyles.margin15]}>
                      <FormInput autoFocus={false} onChangeText={this.changeName} placeholder={'Full Name / Display Name'} security={false}/>
                      <View style={commonStyles.marginTop20}></View>
                      <FormInput autoFocus={false} onChangeText={this.changeEmail} placeholder={'Email / User Name'}  security={false}/>
                      <View style={commonStyles.marginTop20}></View>
                      <FormInput autoFocus={false} onChangeText={this.changePwd} placeholder={'Password'}  security={true}/>
                      <View style={commonStyles.marginTop20}></View>
                      <FormInput autoFocus={false} onChangeText={this.changeConfirmPwd} placeholder={'Confirm Password'}  security={true}/>
                      <View style={commonStyles.marginTop20}></View>
                      <LoginButton iconName={'join-me'} buttonName={'Join Me'}/>
                      <View style={commonStyles.marginBottom40}></View>
                    </View>
                  </KeyboardAvoidingView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backButtonContainer: {
      alignItems: 'flex-start',
      paddingTop: 15,
      paddingLeft: 10
    },
    logoContainer: {
      alignItems: 'center',
      paddingTop: 10
    },
});


export default SignUp;