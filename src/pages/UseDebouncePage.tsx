import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useDebounce } from '@/hooks/useDebounce';

export default function UseDebouncePage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 2000);
  // const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');

  // React.useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     console.log('=========== mount 후 호출', searchTerm);
  //     setDebouncedSearchTerm(searchTerm);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [searchTerm]);

  const [num, setNum] = React.useState(0);
  const debouncedNum = useDebounce<number>(num, 1000);

  return (
    <div>
      <Header />
      <Content>
        UseDebounce Page
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-red-50 p-4">
            <p className="mb-2 font-semibold text-red-700">즉시 업데이트:</p>
            <p className="text-lg text-black">{searchTerm || '(입력 없음)'}</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <p className="mb-2 font-semibold text-green-700">지연 업데이트 (500ms):</p>
            <p className="text-lg text-black">{debouncedSearchTerm || '(입력 없음)'}</p>
          </div>
        </div>
        <input
          type="number"
          className="border p-2"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        {debouncedNum}
      </Content>
      <Footer />
    </div>
  );
}
