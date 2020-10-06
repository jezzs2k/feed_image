import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

const ComponentList = () => {
    const renderItem = ({item}) => {
        return <View>
            <Text>{item}</Text>
        </View>
    };

  return <ScrollView style={styles.container}>
      
  </ScrollView>;
};

const styles = StyleSheet.create({
  container: {},
});

export default ComponentList;