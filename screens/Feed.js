import React from 'react';
import PropTypes from 'prop-types';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import CardList from '../components/CardList';

const items = [
  {
    id: uuidv4(),
    author: 'Vu Thanh Hieu',
  },
  {
    id: uuidv4(),
    author: 'Le Quang Khanh',
  },
  {
    id: uuidv4(),
    author: 'Nguyen Van Toan',
  },
];

const Feed = ({commentsForItem, onPressComments}) => {
  return (
    <CardList
      items={items}
      commentsForItem={commentsForItem}
      onPressComments={onPressComments}
    />
  );
};

Feed.propTypes = {
  commentsForItem: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        comment: PropTypes.string,
      }),
    ),
  ).isRequired,
  onPressComments: PropTypes.func.isRequired,
};

export default Feed;
