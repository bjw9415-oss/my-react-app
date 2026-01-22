// import React from 'react';
import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export default function UseLocalStoragePage() {
  // const [name, setName] = React.useState<string>(() => {
  //   const savedName = localStorage.getItem('demo-name') as string;
  //   return savedName ?? '';
  // });

  // React.useEffect(() => {
  //   localStorage.setItem('demo-name', name);
  // }, [name]);
  const [name, setName] = useLocalStorage<string>('demo-name', '');
  const [num, setNum] = useLocalStorage<number>('demo-num', 1);
  const [json, setJson] = useLocalStorage<{ name: string; age: number }>('demo-json', {
    name: '홍길동',
    age: 1,
  });

  return (
    <div>
      <Header />
      <Content>
        UseLocalStorage Page
        <div className="flex gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={() => setName('')}
            className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
          >
            초기화
          </button>
        </div>
        <div>
          <input type="number" value={num} onChange={(e) => setNum(Number(e.target.value))} />
        </div>
        <div>
          {JSON.stringify(json)}
          <h3>이름: {json.name}</h3>
          <h3>나이: {json.age}</h3>
          <button
            type="button"
            onClick={() => {
              setJson({
                name: '이순신',
                age: 2,
              });
            }}
          >
            클릭
          </button>
        </div>
      </Content>
      <Footer />
    </div>
  );
}
