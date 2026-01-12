import { MyName } from './MyName';
import { MyAge } from './MyAge';

// 1. interface 삭제! 
// 2. 매개변수 { name, age } 삭제!
export function UserInfo1() {
  return (
    <>
      {/* 3. 자식들에게 더 이상 Props를 넘겨주지 않습니다. */}
      {/* 자식들이 알아서 Context 하이패스로 데이터를 가져갈 거니까요. */}
      <MyName /> 
      <MyAge />
    </>
  );
}