import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import ViewDefault from './ViewDefault';

const CommentInput = ({placeholder, onSubmit}) => {
  const [text, setText] = useState('');

  const onChangeText = (text) => {
    setText(text);
  };

  const handleSubmitEditing = () => {
    if (!text) {
      return;
    }

    onSubmit(text);
    setText('');
  };

  return (
    <ViewDefault style={styles.constainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder}
        defaultValue={text}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        onSubmitEditing={handleSubmitEditing}
        onEndEditing={() => {
          setText('');
        }}
      />
    </ViewDefault>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 50,
  },
  textInputStyle: {
    flex: 1,
  },
});

CommentInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentInput;
