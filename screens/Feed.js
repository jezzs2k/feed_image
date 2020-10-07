import React from 'react';
import PropTypes from 'prop-types';

import CardList from '../components/CardList';

const Feed = ({commentsForItem, onPressComments}) => {};

Feed.propTypes = {
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  onPressComments: PropTypes.func.isRequired,
};

export default Feed;
