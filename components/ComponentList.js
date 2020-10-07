import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import ViewDefault from './ViewDefault';

const ComponentList = ({items}) => {
  const renderItem = (item) => {
    return (
      <ViewDefault style={styles.comment} key={item?.id}>
        <ViewDefault style={styles.headerComment} />
        <Text style={styles.textComment}>{item?.comment}</Text>
        <ViewDefault style={styles.actionStyle} />
      </ViewDefault>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {items && items.length > 0 && items.map((item) => renderItem(item))}
    </ScrollView>
  );
};

ComponentList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    }),
  ),
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
