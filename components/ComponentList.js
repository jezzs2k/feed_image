import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import ViewDefault from './ViewDefault';

const ComponentList = ({items}) => {
  const renderItem = (item) => {
    return (
      <ViewDefault style={styles.comment} key={uuidv4()}>
        <ViewDefault style={styles.headerComment}></ViewDefault>
        <Text style={styles.textComment}>{item}</Text>
        <ViewDefault style={styles.actionStyle}></ViewDefault>
      </ViewDefault>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {items.map((item) => renderItem(item))}
    </ScrollView>
  );
};

ComponentList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  headerComment: {},
  comment: {
    marginVertical: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  textComment: {
    fontSize: 16,
    fontWeight: '500',
  },
  actionStyle: {},
});

export default ComponentList;
