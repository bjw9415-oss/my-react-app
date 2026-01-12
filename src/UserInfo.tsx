import { UserInfo1 } from './UserInfo1';

// 1. Props 인터페이스가 필요 없어집니다.
export function UserInfo() {
  return (
    <div className="border-2 p-4">
      {/* 2. 더 이상 name, age를 전달하지 않습니다. */}
      <UserInfo1 />
    </div>
  );
}