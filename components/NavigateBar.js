import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import ViewDefault from './ViewDefault';

const NavigateBar = ({title, leftText, onPressLeftText}) => {
  return (
    <ViewDefault style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text style={styles.textStyle}>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </ViewDefault>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: 'red',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
});

NavigateBar.propTypes = {
  title: PropTypes.string.isRequired,
  leftText: PropTypes.string.isRequired,
  onPressLeftText: PropTypes.func.isRequired,
};

export default NavigateBar;
