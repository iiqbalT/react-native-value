import React from 'react';
import { View, Text } from 'react-native';
import Value from 'react-native-value';

export default class App extends React.Component {
    render() {
        const dummy = {
            id : 1,
            name : 'Jhon',
            age : 24
        }
        const dummy2 = {
            id : 1,
            name : null,
            age : 24
        }
        return (
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Text>{Value.getValue(dummy, 'name', 'anonim')}</Text>
                <Text>{Value.getValue(dummy2, 'name', 'anonim')}</Text>
            </View>
        );
    }
}