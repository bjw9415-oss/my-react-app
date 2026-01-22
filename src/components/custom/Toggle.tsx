// import React from 'react';
import { useToggle } from './useToggle';

export function Toggle() {
  const { isToggle, setToggle } = useToggle();

  console.log('=== Toggle Rendering');
  return (
    <div>
      {isToggle ? 'true' : 'false'}
      <button type="button" onClick={() => setToggle()}>
        Toggle
      </button>
    </div>
  );
}
