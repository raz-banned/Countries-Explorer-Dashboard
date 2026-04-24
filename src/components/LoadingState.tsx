import { Spinner } from "./ui/spinner";

function Loading() {
  return (
    <div className=" flex gap-5 flex-col items-center justify-center py-10">
      <span className=" text-lg text-gray-600">Загрузка...</span>
      <Spinner className="size-8" />
    </div>
  );
}

export default Loading;
