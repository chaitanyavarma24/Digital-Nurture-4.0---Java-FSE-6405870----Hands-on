import React from 'react';
import CounterAlert from './CounterAlert';
import WelcomeAlert from './WelcomeAlert';
import ClickAlert from './ClickAlert';

import CurrencyConvertorAlert from './CurrencyConvertorAlert';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <CounterAlert />
      <ClickAlert/>
      <WelcomeAlert />
      <CurrencyConvertorAlert />


    </div>


  );


}

export default App;
