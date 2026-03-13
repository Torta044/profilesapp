import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callAPI = async () => {
    const response = await fetch("https://sucqvdgc0c.execute-api.us-east-2.amazonaws.com/default/HelloWorldFunction");
    const data = await response.json();
    setMessage(data.body);
  };

  return (
    <div>
      <h1>Serverless Web App</h1>
      <button onClick={callAPI}>Call Lambda Function</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
