import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function About() {
    return (
        <View style={styles.container}>
            <View style={styles.team}>
                <Text style={styles.teamHeading}>FNA : FLOOD NAVIGATION & ASSISTANCE</Text>

                <Text style={styles.teamContent}>KIEFER DIAS</Text>
                <Text style={styles.teamContent}>ANUBHAV SINGH</Text>
                <Text style={styles.teamContent}>JAIRATH JADHAV</Text>
                <Text style={styles.teamContent}>AAVEZ AHMED</Text>
                <Text style={styles.teamContent}>KENNY GONSALVES</Text>

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
        width: windowWidth,
        height: windowHeight,
        padding: 7
    },
    team: {
        borderWidth: 2,
        borderRadius: 9,
        borderColor: "#111",
        padding: 15
    },
    teamHeading: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    teamContent: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 5,
        fontWeight: 'bold'
    }
});