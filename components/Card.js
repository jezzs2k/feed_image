import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import AvatarRow from './AvatarRow';

const Card = () => {
  return (
    <View style={styles.container}>
      <AvatarRow
        fullName={'Vu Thanh Hieu'}
        linkText={'Comment'}
        onPressLinkText={() => console.log('Hieu DZ')}
      />
      <View style={styles.imageFeed}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn2.wpbeginner.com/wp-content/uploads/2013/09/removedefaultimagelinks-og.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageFeed: {},
  image: {
      width: "100%",
      maxHeight: 500,
      height: "100%",
  },
});

export default Card;
