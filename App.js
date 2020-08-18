import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppMain from './src';
import {store, persistor} from './src/state/configureStore';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppMain/>
                </PersistGate>
            </Provider>
        );
    }
}