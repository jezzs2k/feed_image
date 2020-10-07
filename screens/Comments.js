import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ViewDefault from '../components/ViewDefault';
import NavigatorBar from '../components/NavigateBar';
import ComponentList from '../components/ComponentList';
import CommentInput from '../components/CommentInput';

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
