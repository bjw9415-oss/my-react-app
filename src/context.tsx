import React from 'react';

interface ContextValue {
  name: string;
  age: number;
}

export const MyContext = React.createContext<ContextValue>({ name: '홍길동', age: 20 });