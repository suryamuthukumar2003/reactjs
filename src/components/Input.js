import { useState } from "react";
function Input(props) {
  const [name, setName] = useState("");
  return (
    <div>
      <p>{name}</p>
      <input
        type={props?.type}
        onChange={(e) => {
          setName(e?.target?.value);
        }}
      ></input>
    </div>
  );
}
export default Input;
