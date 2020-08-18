import React from 'react';
import { Platform, StyleSheet, View, Image } from 'react-native';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.stackHeaderTitle}>
        <Image style={{width:120, height:30}} source={require('../../../resources/img/logo.png')} resizeMode='contain'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stackHeaderTitle: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: Platform.OS == 'ios' ? 'center' : 'flex-start',
  }
});
export default LogoTitle;