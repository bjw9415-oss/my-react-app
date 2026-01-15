import type { User } from '@/components/users/UserCard';

//  Props 인터페이스 정의 (TypeScript)
// 부모 컴포넌트(UserListPage)로부터 받아야 할 '준비물' 명세서입니다.
interface UserHeaderProps {
  users: User[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}
//  구조 분해 할당
// props.users, props.isLoading 처럼 쓰지 않고, 바로 변수처럼 꺼내 씁니다.
export function UserHeader({ users, isLoading, fetchUsers }: UserHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-800">👥 User Directory</div>
        {/*  데이터 바인딩 */}
        {/* users 배열의 길이(.length)를 이용해 '총 인원'을 동적으로 표시. */}
        <div className="mt-2 text-gray-600">총 {users.length}명의 사용자</div>
      </div>

      <button
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:cursor-pointer hover:bg-blue-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
        //  UX(사용자 경험) 방어 로직
        // 데이터가 로딩 중(isLoading)일 때는 버튼을 비활성화(disabled) 합니다.
        // -> 사용자가 "왜 안 돼?" 하고 버튼을 연타해서 서버에 요청을 폭탄으로 보내는 것을 방지합니다.
        disabled={isLoading} //disabled 는 HTML 표준 명령어
        // 클릭하면 부모에게서 받은 '데이터 불러오기 함수'를 실행합니다.
        onClick={fetchUsers}
      >
        새로고침
      </button>
    </div>
  );
}
