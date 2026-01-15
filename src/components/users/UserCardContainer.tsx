
import { UserCard ,type User} from "./UserCard";

export function UserCardContainer({ users }: { users: User[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// function GridContainer({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {children}
//     </div>
//   );
// }
