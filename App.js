import React, {useState} from 'react';
import {ScrollView, Modal} from 'react-native';

import Card from './components/Card';
import Comments from './screens/Comments';
import ViewDefault from './components/ViewDefault';

const App = () => {
  const [commentsForItem, setCommentForItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);

  const handleComment = (text) => {
    setCommentForItem((comments) => [text, ...comments]);
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
      <ScrollView>
        <Card openCommentScreen={openCommentScreen} />
        <Card openCommentScreen={openCommentScreen} />
      </ScrollView>
      <Modal visible={showModal}>
        <Comments
          onClose={handleClose}
          onSubmitComment={handleComment}
          comments={commentsForItem}
        />
      </Modal>
    </ViewDefault>
  );
};

export default App;
