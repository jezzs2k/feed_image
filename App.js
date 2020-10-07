import React, {useState} from 'react';
import {Modal} from 'react-native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import Comments from './screens/Comments';
import ViewDefault from './components/ViewDefault';
import Feed from './screens/Feed';

const App = () => {
  const [commentsForItem, setCommentForItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);

  const handleComment = (text) => {
    const commentItems = commentsForItem[selectItemId] || [];
    setCommentForItem((comments) => ({
      ...comments,
      [selectItemId]: [...commentItems, {comment: text, id: uuidv4()}],
    }));
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const openCommentScreen = (id) => {
    setSelectItemId(id);
    setShowModal(true);
  };

  return (
    <ViewDefault>
      <Feed
        onPressComments={openCommentScreen}
        commentsForItem={commentsForItem}
      />
      <Modal visible={showModal}>
        <Comments
          onClose={handleClose}
          onSubmitComment={handleComment}
          comments={commentsForItem[selectItemId] || []}
        />
      </Modal>
    </ViewDefault>
  );
};

export default App;
