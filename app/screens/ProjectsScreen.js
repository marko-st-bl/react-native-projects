import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView, FlatList, ActivityIndicator, Dimensions } from 'react-native';

import colors from '../config/colors';

function ProjectsScreen({navigation}) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://pisio.etfbl.net/~markos/rest/web/projects', {
          method: 'GET',
          redirect: 'follow'
        })
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    return(
      <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress = {() => navigation.navigate('Project Info', {
                item
              })}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
          )}
        />
      )}
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

export default ProjectsScreen;