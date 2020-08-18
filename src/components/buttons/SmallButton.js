import React, {Component} from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from '../../common/constants';
import Moment from 'react-moment';

export default class SmallButton extends Component {
    render() {
        const {buttonIndex, selectedButton, iconName, iconColor, buttonContent, iconSize, iconStyle, textStyle, active } = this.props;
        
        let icons;
        if (typeof(iconName) !== 'string') {
          icons = iconName.map((iconSubName, i) => {
            return (
              <Icon style={{paddingRight: 5}} key={i} size ={iconSize} name={iconSubName} color={iconColor}/>
            )
          })
        } else {
          icons = <Icon size ={iconSize} name={iconName} color={iconColor}/>
        }

        return (
          <TouchableOpacity 
          style={iconStyle}
          onPress={(e) => selectedButton(e, buttonIndex)}
          disabled={!active}>
            {icons}
            {iconName === 'posts-time-date'?
              <Moment element={Text} style={textStyle} fromNow>{buttonContent}</Moment>
            :<Text style={textStyle}>{buttonContent}</Text>
            }
          </TouchableOpacity>
        )
    }
}
