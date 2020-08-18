import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { colors, MyEventInfo} from '../../common/constants';
import SmallButton from '../buttons/SmallButton';

export default class MyEventInfoBar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        const { data } = this.props;
        const infos = MyEventInfo.icons.map((iconName, i) => {
          return (
              <SmallButton
                  active={false}
                  key={i}
                  buttonIndex={i}
                  iconName={iconName}
                  iconColor={ MyEventInfo.iconColors[i]}
                  buttonContent={data[i]} 
                  iconSize={15} 
                  iconStyle={styles.buttonItem}
                  textStyle={styles.text}
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
        padding: 10,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    buttonItem: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    text: {
        fontSize: 12,
        backgroundColor: 'transparent',
        fontWeight: '700',
        marginLeft: 8,
        color:colors.gray
    }
})