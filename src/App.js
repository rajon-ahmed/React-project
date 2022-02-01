import React, { useState } from "react";
import MyEditor from "./MyEditor";

export default function App(props) {
  const [editor, setEditor] = useState(null);
  console.log('from state', editor)
  return (
    <>
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
