import React from 'react';
import {LoadingSpinner} from '../components/users/LoadingSpinner';
import {ErrorMessage} from '../components/users/ErrorMessage';
import type {User} from '../components/users/UserCard';
import {UserCardContainer} from '../components/users/UserCardContainer';
import {UserHeader} from '../components/users/UserHeader';


export default function UserListPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : '네트워크 에러가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  let content = null;

  if (error) {
    content = <ErrorMessage message={error} onRetry={fetchUsers} />;
  } else if (isLoading) {
    content = <LoadingSpinner />;
  } else {
    // content = (
    //   <GridContainer>
    //     {users.map((user) => (
    //       <UserCard key={user.id} user={user} />
    //     ))}
    //   </GridContainer>
    // );
    content = <UserCardContainer users={users} />;
  }

  // console.log('======================UserListPage Rendered======================');
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-8 w-[80vw]">
      <div className="mx-auto max-w-7xl">
        <UserHeader users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
        {content}
      </div>
    </div>
  );
}