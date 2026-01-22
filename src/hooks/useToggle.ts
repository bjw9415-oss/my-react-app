import React from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
