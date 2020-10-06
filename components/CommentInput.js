import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

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
    <View style={styles.constainer}>
      <TextInput
        style={styles.textInputStyle}
        placeholder={placeholder}
        value={text}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
    marginVertical: 20,
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
