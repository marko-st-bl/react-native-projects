import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';

import colors from '../config/colors';

function ProjectInfoScreen({route, navigation}) {

    const {item} = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.projectText}>Title: {item.name}</Text>
                <Text style = {styles.projectText}>Manager: {item.manager}</Text>
                <Text style = {styles.projectText}>Supervisor: {item.supervisor}</Text>
            </View>
            <View style={styles.footer}>
            <TouchableOpacity style={styles.button}
                onPress = {() => (navigation.navigate('Parts', {item}))}>
                    <Text style={styles.buttonText}>State</Text>
                </TouchableOpacity><TouchableOpacity style={styles.button}
                onPress = {() => (navigation.navigate('Finances', {item}))}>
                    <Text style={styles.buttonText}>Finances</Text>
                </TouchableOpacity><TouchableOpacity style={styles.button}
                onPress = {() => (navigation.navigate('Activities'))}>
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
        color: colors.onBackground,
        fontSize: 20,
    },
    header: {
        flex: 1,
        padding: 30,
        width: Dimensions.get('window').width,
        marginVertical: 4,
        marginHorizontal: 18,
    },
    footer: {
        flex: 2,
    },
    button: {
        backgroundColor: colors.primary,
        width: 300,
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
        fontSize: 18,
    }
})

export default ProjectInfoScreen;

