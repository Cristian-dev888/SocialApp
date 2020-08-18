import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { colors, MyEventTop} from '../../common/constants';
import SmallButton from '../buttons/SmallButton';

export default class MyEventTopBar extends React.Component {
    constructor(props) {
      super(props);
    }

    selectedButton = (index) => {
      switch (index) {
        case 0:
          this.props.selectedLeaderBtn(true)
          break;
        case 1:
            this.props.selectedLeaderBtn(false)
          break;
      }
    }

    render() {
        const {selectedLeader} = this.props;

        const infos = MyEventTop.icons.map((iconName, i) => {
          let iconStyle;
          let textStyle;
          switch (i) {
            case 0:
              iconStyle = selectedLeader ? styles.buttonItem : [styles.buttonItem, {borderBottomWidth: 0}];
              textStyle =  selectedLeader ? styles.text : [styles.text, {color: colors.gray}];
              break;
            case 1:
                iconStyle = selectedLeader ?  [styles.buttonItem, {borderBottomWidth: 0}] : styles.buttonItem ;
                textStyle =  selectedLeader ? [styles.text, {color: colors.gray}] : styles.text;
              break;
          }
          return (
              <SmallButton
                  active={true}
                  key={i}
                  buttonIndex={i}
                  iconName={iconName}
                  iconColor={ MyEventTop.iconColors[i]}
                  buttonContent={MyEventTop.buttons[i]} 
                  iconSize={30} 
                  iconStyle={iconStyle}
                  textStyle={textStyle}
                  selectedButton={this.selectedButton}
              />
          )
        })
        
        return (
          <View  style={styles.container}>
            {infos}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 20,
    },
    buttonItem: {
        width: '50%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor:  colors.black,
        borderBottomWidth: 1
    },
    text: {
        fontSize: 20,
        backgroundColor: 'transparent',
        fontWeight: '700',
        marginLeft: 8,
        color:colors.black
    }
})