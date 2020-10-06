import React, {useState, useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import AvatarRow from './AvatarRow';
import ViewDefault from './ViewDefault';
import SvgHeart from './Svgs/heartIcon';

const Card = ({openCommentScreen}) => {
  const [timeClick, setTimeClick] = useState(null);
  const [isLike, setIslike] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleDoubleClick = () => {
    const now = new Date().getTime();
    const delta = now - timeClick;
    if (delta < 200) {
      onFadeInHeart();
    }
    setTimeClick(now);
  };

  const handleDetailFeed = () => {
    openCommentScreen(1);
  };

  const onFadeInHeart = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }, 1000);
  };

  return (
    <ViewDefault style={styles.container}>
      <AvatarRow
        fullName={'Vu Thanh Hieu'}
        linkText={'Comment'}
        onPressLinkText={() => console.log('Hieu DZ')}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.imageFeed}
        onPress={handleDoubleClick}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri:
              'https://cdn2.wpbeginner.com/wp-content/uploads/2013/09/removedefaultimagelinks-og.png',
          }}
        />
        <Animated.View style={[styles.heartAnimated, {opacity: fadeAnim}]}>
          <SvgHeart size={80} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDetailFeed}
        style={styles.showFeedBottom}
      />
    </ViewDefault>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  imageFeed: {
    width: '100%',
    height: 280,
    maxHeight: 280,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 280,
    maxHeight: 280,
  },
  showFeedBottom: {
    width: '100%',
    height: 100,
    maxHeight: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.4)',
  },
  heartAnimated: {
    position: 'absolute',
    transform: [{scale: 1}],
  },
});

export default Card;
