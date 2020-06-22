import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function ProjectInfoScreen({ route, navigation }) {

    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>title:</Text>
                    <Text style={styles.projectText}>{item.name}</Text>
                </View>
                <View style={styles.subHeaderContainer}>
                    <View style={styles.participantContainer}>
                        <Text style={styles.titleText}>manager:</Text>
                        <Text style={styles.participantText}>{item.manager}</Text>
                    </View>
                    <View style={styles.participantContainer}>
                        <Text style={styles.titleText}>supervisor:</Text>
                        <Text style={styles.participantText}>{item.supervisor}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}
                    onPress={() => (navigation.navigate('Parts', { item }))}>
                    <Text style={styles.buttonText}>State</Text>
                </TouchableOpacity><TouchableOpacity style={styles.button}
                    onPress={() => (navigation.navigate('Finances', { item }))}>
                    <Text style={styles.buttonText}>Finances</Text>
                </TouchableOpacity><TouchableOpacity style={styles.button}
                    onPress={() => (navigation.navigate('Activities', { item }))}>
                    <Text style={styles.buttonText}>Activities</Text>
                </TouchableOpacity>
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
    projectText: {
        fontSize: 24,
        color: colors.onBackground,
    },
    participantText: {
        fontSize: 18,
        color: colors.onBackground,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.primary,
        width: 330,
        height: 70,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        opacity: 0.9,
    },
    buttonText: {
        color: colors.onPrimary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleContainer: {
        flex: 1,
        backgroundColor: colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 330,
        margin: 5,
    },
    titleText: {
        color: colors.onBackground,
        fontSize: 14,
    },
    participantContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: '100%',
        backgroundColor: colors.surface,
        borderRadius: 10,
        margin: 5,
    },
    subHeaderContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
        borderRadius: 10,
        width: 330,
        margin: 5,
    }
})

export default ProjectInfoScreen;

