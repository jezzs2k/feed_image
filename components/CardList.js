import React from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

const CardList = ({items, commentsForItem, onPressComments}) => {
  const renderItem = ({item: {id, author}}) => {
    const comments = commentsForItem[id];
    return (
      <Card
        fullName={author}
        openCommentScreen={onPressComments}
        id={id}
        linkText={`${comments ? comments.length : 0} comments`}
      />
    );
  };

  const keyExtractor = ({item: {id}}) => id;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      extraData={commentsForItem}
    />
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  onPressComments: PropTypes.func.isRequired,
};

export default CardList;
