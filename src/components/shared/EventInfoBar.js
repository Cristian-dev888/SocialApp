import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import { colors } from '../../common/constants';
import SmallButton from '../buttons/SmallButton';
import ReactionBar from './ReactionBar';

export default class EventInfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showReactionView: false,
            measurements: {}
        }
    }

    selectedTopInfo = (index) => {

    }

    
    selectedBottomInfo = (e, index) => {
        switch (index) {
            case 0:
                this.setState({
                    measurements:{
                        x:e.nativeEvent.pageX, y:e.nativeEvent.pageY
                    },
                    showReactionView: !this.state.showReactionView
                })
                break;
            case 1: 
                break;
            case 2:
                break;
        }
    }

    closeReactionButton = () => {
        this.setState({
            showReactionView: false
        })
    }

    selectedReactionButton = (index) => {
        this.setState({
            showReactionView: false
        })
    }

    render() {
        const { type, data, icons } = this.props;
        const infos = icons.icons.map((iconName, i) => {
            let style;
            switch (i) {
                case 0: {
                    style = styles.buttonItemLeft
                    break;
                }
                case 1: {
                    style = styles.buttonItemCenter
                    break;
                }
                case 2: {
                    style = styles.buttonItemRight
                    break;
                }
            }
            return (
                <SmallButton
                    active={true}
                    key={i}
                    buttonIndex={i}
                    selectedButton={type === 0 ? this.selectedTopInfo : this.selectedBottomInfo}
                    iconName={iconName}
                    iconColor={icons.iconColors[i]}
                    buttonContent={data[i]} 
                    iconSize={type === 0 ? 15 : 20} 
                    iconStyle={style}
                    textStyle={styles.text}
                />
            )
        })
        
        return (
            <View  style={type === 0 ? styles.containerTop : styles.containerBottom} ref={ref=>this.view=ref}>
                {infos}
                <ReactionBar selectedButton={this.selectedReactionButton}  closeReactionBar={this.closeReactionButton} 
                    visible={this.state.showReactionView} 
                    positionInfo={this.state.measurements}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerTop: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 10
    },
    containerBottom: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 10,
        paddingBottom: 0
    },
    buttonItemLeft: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',       
    },
    buttonItemCenter: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',       
    },
    buttonItemRight: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',       
    },
    text: {
        fontSize: 12,
        backgroundColor: 'transparent',
        fontWeight: '700',
        marginLeft: 8,
        color:colors.gray
    }
})