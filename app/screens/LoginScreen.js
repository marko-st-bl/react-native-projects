import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView, StatusBar, TextInput } from 'react-native'

import colors from '../config/colors';

function LoginScreen({navigation}){

    const [usernameText, setUsername] = useState('');
    const [passwordText, setPassword] = useState('');

    const [authKey, setAuthKey] = useState({});


    async function login() {
        // Default options are marked with *
        url = 'http://pisio.etfbl.net/~markos/rest/web/api/loginn';
        data = {username: usernameText, password: passwordText};

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        console.log(response.status);
        if(response.status == 200){
            response.json().then(res => {setAuthKey(res)
              }).catch((error) => {
                console.error('Error:', error);
              });
            navigation.navigate('Projects', authKey);
        }else if (response.status >= 400){
            alert('Couldn\'t log in');
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
                autoCapitalize = 'none'
                onChangeText={usernameText => setUsername(usernameText)}/>
                </View>
                <View style={styles.inputBoxContainer}>
                <TextInput style={styles.inputBox}
                underlineColorAndroid = 'rgba(0,0,0,0)'
                placeholder = 'Password'
                textContentType = 'password'
                autoCapitalize = 'none'
                secureTextEntry = {true}
                onChangeText={passwordText => setPassword(passwordText)}/>
                </View>
                <TouchableOpacity style={styles.loginButton}
                onPress = {() =>login()}>
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

