import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function TestStorage() {
  const [text, setText] = useState("");
  const [storage, setStorage] = useLocalStorage("user", "raz");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => setStorage(text)}>Сохранить</button>
    </div>
  );
}

export default TestStorage;
