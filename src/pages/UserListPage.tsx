import React from 'react';

import { ErrorMessage } from '@/components/users/ErrorMessage';
import { LoadingSpinner } from '@/components/users/LoadingSpinner';
import type { User } from '@/components/users/UserCard';
import { UserCardContainer } from '@/components/users/UserCardContainer';
import { UserHeader } from '@/components/users/UserHeader';

export default function UserListPage() {
  //비동기 데이터 처리를 위한 3가지 필수 상태
  //1. 데이터: 실제 보여줄 데이터
  //2. 로딩: 데이터를 불러오는 중인지 표시
  //3. 에러: 에러가 발생했는지 표시(실패했을 때)
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  /**
   * 비동기적으로 유저 목록을 가져옵니다.
   * 에러가 발생하면 에러 메시지를 상태에 저장합니다.
   * 로딩 중일 때는 로딩 상태를 true로 설정합니다.
   */
  const fetchUsers = async () => {
    try {
      // 요청시작: 로딩을 켜고, 에러 메시지를 제거
      setIsLoading(true);
      setError('');

      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      //404,500,403 일때, 나머지 에러에 대해서도 예외처리
      if (!response.ok) {
        switch (response.status) {
          case 404:
            throw new Error('요청하신 데이터를 찾을 수 없습니다.');
          case 500:
            throw new Error('서버 내부 오류입니다. 관리자에게 문의하세요.');
          case 403:
            throw new Error('접근 권한이 없습니다.');
          default:
            throw new Error(`요청 실패: ${response.status}`);
        }
      }

      const data = await response.json();
      setUsers(data); // 성공 시 데이터 상태 업데이트
    } catch (error) {
      // TypeScript 타입 가드 (Type Guard)
      // error가 Error 객체인지 확인 후 메시지 추출 (안전한 에러 처리)
      setError(error instanceof Error ? error.message : '네트워크 에러가 발생했습니다.');
    } finally {
      //성공하든 실패하든 로딩 상태는 반드시 꺼야됨(UX관리 측면)
      setIsLoading(false);
    }
  };
  // 의존성 배열이 빈 배열([])이므로, 컴포넌트가 처음 화면에 나타날 때 '딱 한 번' 실행
  React.useEffect(() => {
    fetchUsers();
  }, []);

  //조건부 렌더링 (Variable Pattern)
  // return 문 안에서 복잡한 삼항 연산자를 쓰는 대신,
  // 변수(content)에 미리 UI를 할당하여 가독성을 높임
  let content = null;

  if (error) {
    //// 에러 발생 시: 에러 메시지와 '재시도 버튼'을 위한 함수 전달
    content = <ErrorMessage message={error} onRetry={fetchUsers} />;
  } else if (isLoading) {
    // 로딩 중일 때: 로딩 스피너
    content = <LoadingSpinner />;
  } else {
    // content = (
    //   <GridContainer>
    //     {users.map((user) => (
    //       <UserCard key={user.id} user={user} />
    //     ))}
    //   </GridContainer>
    // );
    //// 성공 시: 데이터가 담긴 컨테이너 렌더링
    // (기존 map 로직을 UserCardContainer로 분리하여 코드가 훨씬 깔끔해짐)
    content = <UserCardContainer users={users} />;
  }

  // console.log('======================UserListPage Rendered======================');
  return (
    <div className="min-h-screen w-[80vw] bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="mx-auto max-w-7xl">
        <UserHeader users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
        {content}
      </div>
    </div>
  );
}
