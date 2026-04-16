function Loading() {
  return (
    <div className=" flex gap-5 flex-col items-center justify-center h-dvh">
      <span className=" text-lg text-gray-600">Загрузка...</span>
      <div className=" border-4 border-solid border-indigo-500 rounded-full w-32 h-32 animate-spin border-t-emerald-500"></div>
    </div>
  );
}

export default Loading;
