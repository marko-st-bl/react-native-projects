import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Dimensions } from 'react-native';

import colors from '../config/colors';

function ActivityDetailsScreen({ route, navigation }) {

    const { item } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>title: {item.name}</Text>
            </View>
            <View>
                <Text style={styles.itemText}>Participants:</Text>
            </View>
            <FlatList
                data={item['projectActivityParticipants']}
                keyExtractor={({ idparticipant }, index) => idparticipant.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item.participantName}</Text>
                            <Text style={styles.itemText}>{item.hours}h</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
    itemContainer: {
        width: Dimensions.get('window').width,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.surface,
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
    },
    itemText: {
        color: colors.onBackground,
        fontSize: 16,
    }
})

export default ActivityDetailsScreen;