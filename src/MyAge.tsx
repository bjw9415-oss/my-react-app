import { useContext } from 'react';
import { MyContext } from './context'; // 저장소 경로 확인!

export function MyAge() {
  // 1. 컨텍스트에서 age 데이터만 낚아챕니다.
  const { age } = useContext(MyContext); 

  // 2. props 없이도 age를 자유롭게 사용합니다.
  return (
    <div className="text-2xl">
      내 나이는 {age} 세 입니다.
    </div>
  );
}