import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarChart } from 'react-native-charts';


export default function Graph() {

    return (
        <BarChart
            style={styles.container}
            dataSets={[
                {
                    fillColor: '#46b3f7',
                    data: [
                        { value: 15 },
                        { value: 10 },
                        { value: 12 },
                        { value: 11 },
                    ]
                },
                {
                    fillColor: '#3386b9',
                    data: [
                        { value: 14 },
                        { value: 11 },
                        { value: 14 },
                        { value: 13 },
                    ]
                },
            ]}
            graduation={1}
            horizontal={false}
            showGrid={true}
            barSpacing={5}
            style={{
                height: 300,
                margin: 15,
            }} />
        // <View style={styles.container}>



        //     <Text>Graph is above</Text>
        // </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

