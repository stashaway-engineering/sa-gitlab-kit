import React, { useCallback, useState } from "react";
import formatEvidences from "./formatEvidences";

function App() {
  const [content, setContent] = useState("");

  const format = useCallback(() => {
    const formattedContent = formatEvidences(content);

    setContent(formattedContent);
    navigator.clipboard.writeText(formattedContent);
  }, [content, setContent]);

  return (
    <div style={{ margin: 100 }}>
      <h1>Evidence formatters</h1>

      <textarea
        style={{ height: 300, width: 400 }}
        value={content}
        onChange={event => setContent(event.target.value)}
      />

      <button style={{ display: "block" }} onClick={format}>
        Format & copy
      </button>
    </div>
  );
}

export default App;
