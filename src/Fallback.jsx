function Fallback({ error, resetErrorBoundary }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <p className="font-bold">Что то пошло не так:</p>
      <pre className="text-sm">{error.message}</pre>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={resetErrorBoundary}
      >
        Попытайтесь снова
      </button>
    </div>
  );
}

export default Fallback;
