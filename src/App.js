import { useState } from "react";

function App() {
  // State
  const [message, setMessage] = useState( // useState allows to store a variable for the time the browser is open. 'setMessage' is a function allowing to update the 'message' variable
    " bfkvlsjkvjskldfjsldfjsl"
  );

  
  // Actions
function handleClick() {
  setMessage("Some new message with a smart content");
}


// UI
  return (
  <div> 
    <h1> {message} </h1>
    <button onClick={handleClick}> Update the message </button>
  </div>);
}

export default App;
