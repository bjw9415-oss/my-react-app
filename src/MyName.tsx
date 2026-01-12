// export function MyName ({name} : { name: string }){
//     return <div className="text-3xl font-bold underline"> My Name:{name}  </div>

import { useContext } from 'react';
import { MyContext } from './context'; // 만든 컨텍스트 가져오기

export function MyName() {
  // Props로 받지 않아도, 하이패스로 바로 낚아챕니다!
  const { name } = useContext(MyContext); 

  return <div>내 이름은 {name} 입니다.</div>;
}