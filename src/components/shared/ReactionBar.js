import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon, ReactionButtons, colors } from '../../common/constants';
import {Header} from 'react-navigation';

class ReactionBar extends Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps, state){
    return {
      includeTopBar: nextProps.includeTopBar
    }
  }

  render() {
    const {selectedButton, closeReactionBar, visible, positionInfo} = this.props;

    const icons = ReactionButtons.icons.map((iconName, i) => {
        return (
          <TouchableOpacity
          key={i}
          onPress={() => selectedButton(i)}
          >
            <Icon style={styles.iconStyle} size ={20} name={iconName} color={ReactionButtons.colors[i]}/>
          </TouchableOpacity>
        )
    })

    return (
      <Modal animationIn={'fadeIn'} animationOut={'fadeOut'} isVisible={visible} onBackdropPress={() => { closeReactionBar(); }} backdropColor={'transparent'}>
        <View style={[styles.container, {top:  positionInfo.y-60, left: positionInfo.x-50}]}>
          {icons}
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 10,
    padding: 5,
  },
  iconStyle: {
    paddingLeft: 2.5,
    paddingRight: 2.5,
  }
})

export default (ReactionBar)