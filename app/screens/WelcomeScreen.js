import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView } from 'react-native';

import colors from '../config/colors';

function WelcomeScreen({navigation}) {

    return (
    
         <SafeAreaView style={styles.container}>
            <View style={styles.headingContainer}> 
                <Text style={styles.headingText}>
                Project Manager
                </Text>
                <Text style={styles.caption}>
                     Manage your projects with ease
                </Text>
            </View>
            <TouchableNativeFeedback onPress={() => navigation.navigate('Login')}>
             <View style={styles.loginButton}>
                 <Text style={styles.loginButtonText}>
                     LOGIN
                 </Text>
             </View>
            </TouchableNativeFeedback>
         </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    caption: {
        color: colors.onBackground,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.background,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: "50%",
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        bottom: 20,
    },
    loginButtonText: {
        color: colors.onPrimary,
        fontWeight: 'bold', 
        fontSize: 18,
    },
    headingContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },
    headingText: {
        color: colors.onBackground,
        fontSize: 30,
    }
})

export default WelcomeScreen;