import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeComp() {
    return (
        <View style={styles.container}>
            <Text style={styles.topCONTText}>FLOOD RESCUE STATUS</Text>
            <View>
                <Text>No. of Boats : 8</Text>
            </View>
            <View>
                <Text>No. of People recovered : 90</Text>
            </View>
            <Image
                style={{ width: 150, height: 150, marginTop: 30 }}
                source={require('./logo.jpg')}
            />
            <View style={styles.bottomCONT}>
                <Text style={styles.bottomCONTText}>FNA : FLOOD NAVIGATION & ASSISTANCE SYSTEM</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bottomCONT: {
        position: 'absolute',
        bottom: 25,
        padding: 10,

    },
    bottomCONTText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    topCONTText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    }
});