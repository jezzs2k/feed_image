import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ViewDefault from './ViewDefault';
import NavigatorBar from './NavigateBar';
import ComponentList from './ComponentList';
import CommentInput from './CommentInput';

const Comments = ({comments, onClose, onSubmitComment, style}) => {
  return (
    <ViewDefault>
      <NavigatorBar
        title={'Comments'}
        leftText={'Close'}
        onPressLeftText={onClose}
      />
      <CommentInput onSubmit={onSubmitComment} placeholder="Write input ..." />
      <ComponentList items={comments} />
    </ViewDefault>
  );
};

const styles = StyleSheet.create({});

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func.isRequired,
  style: PropTypes.object,
};

Comments.defaultProps = {
  style: null,
};

export default Comments;
