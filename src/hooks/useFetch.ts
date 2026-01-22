import React from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('fetch Error');
      }
      const data = await response.json();
      console.log('data', data);
      setData(data);
    } catch (error) {
      console.log('error', error);
      const msg = error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [url]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
