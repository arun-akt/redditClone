import React, { useState } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import Posts from './Posts'
import { Picker } from '@react-native-picker/picker';

function Home() {
    const [filterValue, setFilterValue] = useState();
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 5 }}>
                    <Picker
                        selectedValue={filterValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setFilterValue(itemValue)
                        }>
                        <Picker.Item label="Home" value="top" />
                        <Picker.Item label="New Realease" value="new-releases" />
                    </Picker>
                </View>
            ),
        });
    }, [navigation]);
    return (
        <View>
            <ScrollView>
                <View>
                    <Posts value={filterValue} />
                </View>
            </ScrollView>
        </View>
    );
}
export default Home;
