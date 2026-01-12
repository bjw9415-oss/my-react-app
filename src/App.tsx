import React ,{ useState } from 'react'
import './App.css'
import { UserInfo } from './UserInfo';
import {MyContext} from './context';

function App() {
  
  // state 값은 state 함수를 통해서만 변경해야 한다. 
  // setState 함수 호출시 해당 컴포넌트가 재렌더링 된다. 
  const [name, setName] = useState('홍길동');
  const [age, setAge] = useState(20);
  // const handleName = () => {
  //   if (name === '홍길동') {
  //   setName('임꺽정');
  // } else {
  //   setName('홍길동');
  // }
  // };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  }
  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setAge(Number(event.target.value));
  }
  
  return (
    <MyContext.Provider value={{name,age}}>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1> 
      <p>{name}</p>
      {/* <button onClick={handleName}>이름 변경 </button> */}
      <input className='border p-1.5' type='text' placeholder='이름를 입력하세요.' onChange={handleNameChange}/>
      <input className='border p-1.5' type='number' placeholder='나이를 입력하세요.' onChange={handleAgeChange}/>
     
      <UserInfo />
    </MyContext.Provider>
  )
}

export default App
