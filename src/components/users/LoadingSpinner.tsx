export function LoadingSpinner() {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg text-gray-600">사용자 정보를 불러오는 중...</p>
      </div>
    </div>
  );
}