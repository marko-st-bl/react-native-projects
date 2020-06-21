import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView, FlatList, ActivityIndicator, Dimensions } from 'react-native';

import colors from '../config/colors';

function FinancesScreen({route, navigation}){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const {item} = route.params;

    let url = 'http://pisio.etfbl.net/~markos/rest/web/projects/' + item['id'] + '?expand=idfinances';

    useEffect(() => {
        fetch(url, {
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
            data={data['idfinances']}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={(item['type'] == 'income' ? styles.outcome: styles.income)}>
                    <View style={styles.idContainer}>
                <Text style={styles.itemText}>{item.id}</Text>
                    </View>
                    <View style={styles.descContainer}>
                <Text style={styles.itemText}>{item.description}</Text>

                    </View>
                    <View>
            <Text style={styles.itemText}>{item.amount} BAM</Text>
                    </View>
            
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
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: Dimensions.get('window').width,
      borderRadius: 10,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 16,
    },
    idContainer: {
        flex: 1,
    },
    descContainer: {
        flex: 3,
    },
    itemText: {
      color: colors.onError,
      fontSize: 16,
    },
    income: {
      backgroundColor: '#77d349',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: Dimensions.get('window').width,
      borderRadius: 10,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 16,
    },
    outcome: {
      backgroundColor: colors.error,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: Dimensions.get('window').width,
      borderRadius: 10,
      padding: 20,
      marginVertical: 4,
      marginHorizontal: 16,
    }
})

export default FinancesScreen;