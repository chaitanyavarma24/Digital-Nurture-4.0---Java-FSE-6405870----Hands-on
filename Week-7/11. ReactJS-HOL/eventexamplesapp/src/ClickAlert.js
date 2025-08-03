import React from 'react';

function ClickAlert() {
  const handleClick = (event) => {
    event.preventDefault(); // React Synthetic Event
    alert('I was clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickAlert;
