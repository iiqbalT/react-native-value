# react-native-value
Simple manipulate resource to get your fix value.

✨✨ welcome to add your custom function value.

### Install
```bash
npm install react-native-value
```

### Example to use
```javascript
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
```
| function  | params  | description  |
| ------------------------ | ------------------------ | ------------------------ |
| **`getValue`**  | `source` : your custom object, `keyValue` : your object key, `defaultValue` : value if keyValue not exist or keyValue is null  | find key value of object  |
