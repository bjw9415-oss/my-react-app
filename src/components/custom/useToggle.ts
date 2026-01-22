import React from 'react';

export function useToggle() {
  const [isToggle, setIsToggle] = React.useState(false);

  const setToggle = () => {
    setIsToggle(!isToggle);
  };

  console.log('======== useToggle Rendering');
  return { isToggle, setToggle };
}
