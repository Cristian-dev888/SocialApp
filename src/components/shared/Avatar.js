import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    View
} from 'react-native';
import { Icon, colors } from '../../common/constants';

export default class Avatar extends Component {
    render() {
        const { islogined, imageUri, name, selectedCamera } = this.props;
        let backgroundPath = islogined ? require('../../../resources/img/user-bg.png') : null;

        return (
          <ImageBackground style={styles.profilecontainer} source={backgroundPath}>
            { islogined ?
            <View style={{flex: 1}}>
              <Image style={styles.profile} source={{uri: imageUri}}/>
              <TouchableOpacity style={styles.cameraIcon} onPress={() => selectedCamera()}>
                <Icon size={40} name={'change-image'} color={colors.gray}/>
              </TouchableOpacity>
            </View>
            : <Icon style={styles.iconStyle} size={100} name={'guest'} color={colors.primary}/>
            }
            <Text style={styles.name}>{islogined ? name : 'Guest'}</Text>
          </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
  profilecontainer: {
    width: '100%',
    height: '100%',
    flex: 0.7,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf:'center',
    marginTop: 10,
  },
  cameraIcon: {
    height: 60,
    width: 60,
    borderRadius: 60/2,
    backgroundColor: colors.lightGray,
    position: 'absolute',
    bottom: 5,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile: {
    flex: 1,
    height: 150,
    width: 150,
    borderRadius: 150/2,
    alignSelf:'center',
    marginTop: 20,
  },
  name:{
    fontSize:20,
    color: colors.black,
    fontWeight: "600",
    alignSelf:'center',
    marginTop: 10,
    marginBottom: 10,
  },
})
