import React, { useState } from "react";
import MyEditor from "./MyEditor";

export default function App(props) {
  const [editor, setEditor] = useState(null);
  console.log('from state', editor)
  return (
    <>
    <div>
      <h2>This is ck editor code testing</h2>
    </div>
      <MyEditor
        handleChange={(data) => {
          setEditor(data);
        }}
        data={editor}
        {...props}
      />
    </>
  );
}
