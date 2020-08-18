import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { colors, TopButtons } from '../../common/constants';
import SmallButton from '../buttons/SmallButton';

export default class ButtonBar extends Component {

    selectedButtton = (index) => {

    }

    render() {
        const topButtons = TopButtons.icons.map((iconName, i) => {
            return (
                <SmallButton
                    key={i}
                    buttonIndex={i}
                    selectedButton={this.selectedButtton}
                    iconName={iconName}
                    iconColor={TopButtons.iconColors[i]}
                    buttonContent={TopButtons.buttons[i]} 
                    iconSize={20} 
                    iconStyle={styles.buttonItem}
                    textStyle={styles.text}
                />
            )
        })
        return (
            <View ref='container' style={[styles.container]}>
                {topButtons}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: colors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.gray
    },
    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',       
    },
    text: {
        fontSize: 18,
        backgroundColor: 'transparent',
        fontWeight: '700',
        marginLeft: 8,
        color:colors.subText
    }
});