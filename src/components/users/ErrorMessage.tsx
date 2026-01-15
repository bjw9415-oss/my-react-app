
interface ErrorMessageProps {
    message: string;
    onRetry: () => Promise<void>;
}
export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="max-w-md rounded-lg bg-red-50 p-6 text-center">
        <div className="mb-4 text-5xl">❌</div>
        <h2 className="mb-2 text-xl font-bold text-red-700">오류가 발생했습니다</h2>
        <p className="mb-4 text-red-600">{message}</p>
        <button
          onClick={onRetry}
          className="rounded-lg bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}