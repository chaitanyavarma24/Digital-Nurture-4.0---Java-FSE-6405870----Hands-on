import React from 'react';

function WelcomeAlert() {
  const sayMessage = () => {
    alert('Welcome');
  };

  return (
    <div>
      <button onClick={() => sayMessage()}>Say Welcome</button>
    </div>
  );
}

export default WelcomeAlert;
