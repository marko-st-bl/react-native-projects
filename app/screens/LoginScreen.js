import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView, StatusBar, TextInput } from 'react-native'

import colors from '../config/colors';

//const [username, setUsername] = useState('');
//const [password, setPassword] = useState('');

function LoginScreen({navigation}){

    const [usernameText, setUsername] = useState('');
    const [passwordText, setPassword] = useState('');

    const [isLoading, setLoading] = useState(true);

    function login(){
        let response = fetch('http://192.168.100.5/login/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameText,
                password: passwordText,
            })
        }).then((response) => response.json()).catch((error) => {
            console.error(error);
        });
        if(response){
            alert(response);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

            </View>
            <View style={styles.footer}>
                <View style={styles.inputBoxContainer}>
                <TextInput style={styles.inputBox}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder = 'Username'
                textContentType = 'username'
                onChangeText={usernameText => setUsername(usernameText)}/>
                </View>
                <View style={styles.inputBoxContainer}>
                <TextInput style={styles.inputBox}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder = 'Password'
                textContentType = 'password'
                secureTextEntry = {true}
                onChangeText={passwordText => setPassword(passwordText)}/>
                </View>
                <TouchableOpacity style={styles.loginButton}
                onPress = {() => (navigation.navigate('Projects'))}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    },
    footer: {
        flex: 2,
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: colors.primary,
        color: colors.onPrimary,
        opacity: 0.9,
        padding: 15,
    },
    inputBoxContainer: {
        borderWidth: 1,
        borderRadius: 25,
        overflow: 'hidden',
        marginVertical: 10,
    },
    loginButton: {
        backgroundColor: colors.secondary,
        width: 300,
        height: 70,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    loginButtonText: {
        color: colors.onPrimary,
        fontWeight: 'bold', 
        fontSize: 18,
    },
})

export default LoginScreen;

