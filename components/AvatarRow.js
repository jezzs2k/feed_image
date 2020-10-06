import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import {ramdomColor} from '../utils/getColorAvatar';

const AvatarRow = ({fullName, linkText, onPressLinkText}) => {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.info}>
        <Avatar name={fullName} bgColor={ramdomColor()} />
        <Text style={styles.textStyle} numberOfLines={1}>
          {fullName}
        </Text>
      </View>
      {!!linkText && (
        <TouchableOpacity
          onPress={onPressLinkText}
          style={styles.linkTextContainer}>
          <Text style={styles.linkTextStyle}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

AvatarRow.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  linkTextStyle: {
    color: '#000',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '800',
  },
  linkTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AvatarRow;
