import React from 'react';
import {View, SafeAreaView, Platform} from 'react-native';
import PropTypes from 'prop-types';

const ViewDefault = ({children, style}) => {
  return Platform.OS === 'ios' ? (
    <SafeAreaView style={style}>{children}</SafeAreaView>
  ) : (
    <View style={style}>{children}</View>
  );
};

ViewDefault.propTypes = {
  style: PropTypes.object,
};

export default ViewDefault;
