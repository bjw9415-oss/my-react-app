import React from 'react';

export default function UseCallback() {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(20);

  // 리렌더링 될 때마다 새로 생성되는 함수
  const abc = () => {
    console.log('count', count);
  };

  // // 리렌더링 되어도 기존 함수를 재사용
  // const memoizedAbc = React.useCallback(() => {
  //   console.log('memoizedAbc count', count);
  // }, [count]);

  const memoizedAge = React.useCallback(() => {
    console.log('memoizedAge age', age);
  }, [age]);

  // const memoized = React.useCallback(() => {
  //   console.log('memoized count', count);
  //   console.log('memoized age', age);
  // }, [count, age]);

  // const memoized1 = React.useCallback(() => {
  //   console.log('memoized1 count', count);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const memoizedFunc = React.useCallback(() => {
    console.log('memoizedFunc count', count);
  }, [count]);

  const memoizedFunc1 = React.useCallback(() => {
    console.log('memoizedFunc1 count', age);
    const count = memoizedFunc();
    return count;
  }, [age, memoizedFunc]);

  return (
    <div>
      <div>{age}</div>
      <h1>UseCallback Page</h1>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
      <button onClick={() => setAge(age + 1)}>Age Up</button>
      <p>Count: {count}</p>
      <button onClick={abc}>일반 함수 호출</button>
      <button onClick={memoizedFunc1}>useCallback 함수 호출</button>
      <button onClick={memoizedAge}>useCallback(memoizedAge) 함수 호출</button>
    </div>
  );
}