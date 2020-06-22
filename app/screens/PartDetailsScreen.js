import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import * as Progress from 'react-native-progress';

import colors from '../config/colors';

function PartDetailsScreen({ route, navigation }) {

    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.dateContainer}>
                    <Text style={styles.titleText}>start date:</Text>
                    <Text style={styles.boxText}>{item['startdate']}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.titleText}>end date:</Text>
                    <Text style={styles.boxText}>{item['enddate']}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.progressContainer}>
                    <Text style={styles.titleText}>progress:</Text>
                    <Text style={styles.progressText}>{item['progress'] * 100}%</Text>
                    <Progress.Bar width={330} progress={parseFloat(item['progress'])} color={colors.primary} />
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.titleText}>staff required:</Text>
                    <Text style={styles.boxText}>{item['staffrequired']}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.titleText}>hours required:</Text>
                    <Text style={styles.boxText}>{item['hoursrequired']}</Text>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    body: {
        flex: 2,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dateContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        backgroundColor: colors.surface,
        borderRadius: 10,
        margin: 15
    },
    progressContainer: {
        backgroundColor: colors.surface,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        width: 330,
    },
    progressText: {
        color: colors.onBackground,
        fontSize: 70,
    },
    titleText: {
        color: colors.onBackground,
        fontSize: 14,
    },
    boxText: {
        color: colors.onBackground,
        fontSize: 24,
        paddingTop: 20,
    }
})

export default PartDetailsScreen;