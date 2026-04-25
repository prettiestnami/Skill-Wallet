import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  const updateMessage = () => {
    setMessage("Message Updated by Child");
    console.log("State Updated");
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <Child message={message} updateMessage={updateMessage} />

      <Display message={message} />
    </div>
  );
}

export default Parent;