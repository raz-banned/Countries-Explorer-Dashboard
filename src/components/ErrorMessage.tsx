function ErrorMessage({ type, message }: { type: string; message: string }) {
  return (
    <div className="flex justify-center items-center h-full">
      <span className="text-red-500 p-2 rounded-b-sm">
        Ошибка {type}! {message}
      </span>
    </div>
  );
}

export default ErrorMessage;
