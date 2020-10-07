import React, {useState, useRef} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

import AvatarRow from './AvatarRow';
import ViewDefault from './ViewDefault';
import SvgHeart from './Svgs/heartIcon';

const Card = ({openCommentScreen, fullName, id, linkText}) => {
  const [timeClick, setTimeClick] = useState(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  let scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 0.9, 1],
    outputRange: [1, 1.2, 1, 1.08],
  });

  let transformStyle = {
    ...styles.heartAnimated,
    transform: [{scale: cardScale}],
    opacity: fadeAnim,
  };

  const handleDoubleClick = () => {
    const now = new Date().getTime();
    const delta = now - timeClick;
    if (delta < 300) {
      onFadeInHeart();
    } else {
      setTimeClick(now);
    }
  };

  const handleDetailFeed = () => {
    openCommentScreen(id);
  };

  const onFadeInHeart = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 650,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 650,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }, 900);
  };

  return (
    <ViewDefault style={styles.container}>
      <AvatarRow
        fullName={fullName}
        linkText={linkText}
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
        <Animated.View style={transformStyle}>
          <SvgHeart size={100} />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDetailFeed}
        style={styles.showFeedBottom}
      />
    </ViewDefault>
  );
};

Card.propTypes = {
  linkText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  openCommentScreen: PropTypes.func.isRequired,
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
