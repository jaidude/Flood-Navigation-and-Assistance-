import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import HomeComp from '../components/HomeComp'
export default function Home() {
    return (
        <View style={styles.container}>
            <HomeComp />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        height: windowHeight
    },
});