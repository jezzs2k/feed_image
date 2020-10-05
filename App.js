import React from 'react';

import AvatarRow from './components/AvatarRow';

const App = () => {
  return (
    <AvatarRow
      fullName={'Vu Thanh Hieu'}
      linkText={'Comment'}
      onPressLinkText={() => console.log('Hieu DZ')}
    />
  );
};

export default App;
