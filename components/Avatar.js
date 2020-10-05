import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Avatar = ({url, name, ...props}) => {
  return (
    <View style={[styles.containerAvatar, {...props.customStyle}]}>
      {url ? (
        <Image
          style={[
            styles.containerAvatar,
            {width: props?.size || 40, height: props?.size || 40},
          ]}
          source={{uri: url}}
        />
      ) : (
        <View
          style={[
            styles.containerAvatar,
            {
              width: props?.size || 40,
              height: props?.size || 40,
              backgroundColor: props.bgColor || '#000000',
            },
          ]}>
          <Text
            style={[
              styles.textAvatart,
              {
                color: props?.textColor || '#ffffff',
                fontSize: Math.floor(props?.size / 2 || 20),
              },
            ]}>
            {name?.slice(0, 2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerAvatar: {
    borderRadius: 50,
    justifyContent: 'center',
  },
  textAvatart: {
    color: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

export default Avatar;
