import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

import LogoTitle from '../../components/header/LogoTitle';
import HeaderRight from '../../components/header/HeaderRight';
import EventItem from '../../components/shared/EventItem';
import { EventDetailMenus, colors } from '../../common/constants';
import EventDetailBottomView from "../../components/shared/EventDetailBottomView";

class EventDetailScreen extends React.Component {
    static navigationOptions = {
        headerTitle: <LogoTitle />,
        headerRight: <HeaderRight hasNewNoti={false}/>,
    };

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const itemData = this.props.navigation.getParam('data');
        
        return (
                <View style={styles.container}>
                    <ScrollView>
                        <View style={{flex: 2}}>
                    <EventItem data={itemData} menus={EventDetailMenus} type={1} active={false}/>
                    <View style={styles.divider}></View>
                    </View>
                    <EventDetailBottomView />
                    </ScrollView>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: colors.white,
    },
    divider: {
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 1
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
      },
      card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
      },
});

export default EventDetailScreen;