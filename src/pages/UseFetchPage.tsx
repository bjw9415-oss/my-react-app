import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useFetch } from '@/hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UseFetchPage() {
  // const [users, setUsers] = React.useState<User[]>([]);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState<string>();

  // const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     setError('');

  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     if (!response.ok) {
  //       throw new Error('fetch Error');
  //     }
  //     const data = await response.json();
  //     console.log('data', data);
  //     setUsers(data);
  //   } catch (error) {
  //     console.log('error', error);
  //     const msg = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
  //     setError(msg);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  const {
    data: users = [],
    loading,
    error,
    refetch,
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <Content>
        UseFetch Page
        <button type="button" onClick={refetch}>
          새로고침
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => {
              return (
                <div className="rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md">
                  <h3 className="mb-2 font-bold text-gray-100">{user.name}</h3>
                  <p className="text-sm text-gray-200">{user.email}</p>
                </div>
              );
            })}
          </div>
        )}
      </Content>
      <Footer />
    </div>
  );
}
