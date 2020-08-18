import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View
  } from 'react-native';
import { Icon, SocialButtons } from '../../common/constants';


export default class SocialButton extends Component {
    render() {
        const {selectedButton} = this.props;

        icons = SocialButtons.icons.map((iconName, i) => {
          return (
            <TouchableOpacity 
            key={i}
            style={styles.buttonItem}
            onPress={() => selectedButton(i)}
            >
              <Icon size ={50} name={iconName} color={SocialButtons.colors[i]}/>
            </TouchableOpacity>
          )
        })
        return (
          <View style={styles.container}>
            {icons}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonItem: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginBottom: 0,
    marginTop: 10,
    borderRadius: 5
  },
});
