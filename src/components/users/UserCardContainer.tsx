import { type User, UserCard } from '@/components/users/UserCard';

// Props로 사용자 목록(배열)을 받아옵니다.
export function UserCardContainer({ users }: { users: User[] }) {
  return (
    // [레이아웃 담당]
    // 여기서 카드들을 1열, 2열, 3열, 4열로 배치하는 '틀' 역할을 합니다.
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* [반복 렌더링 담당] */}
      {/*  users 배열을 map으로 돌려서 카드들을 쭉 뽑아냅니다. */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
        //user.id를 key에 넣어주는 건 리액트가 나중에 헷갈리지 말라고 주민등록번호를 붙여주는 것
      ))}
    </div>
  );
}
//map을 돌리는 건 **데이터(배열)**가 있어서 돌리는 것이고,

// function GridContainer({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {children}
//     </div>
//   );
// }
