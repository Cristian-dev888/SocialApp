import React from 'react';
import { StyleSheet, View} from 'react-native';

class BroadCastScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.navigation.navigate('CreateEvent');

        return (
            <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default BroadCastScreen;