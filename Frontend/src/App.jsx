import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [code, setCode] = useState("");
  const [loading,setLoading]=useState(false)
  async function generateReview() {
    setLoading(true)
    setCode("")
    try {
      const response = await axios.post("http://localhost:3000/ai/getReview", {
        code: text,
      });
      console.log(response.data);
      setCode(response.data);
      
    } catch (error) {
      console.log(error)
      setCode("Write the code to review.");
      
    }
    setLoading(false)
  }
  return (
    <>
    <div className="main-container">
        <h1>Code Reviewer</h1>
      <div className="sub-container">
        {/* Left Box */}
        <div className="left-box">
          <textarea
            placeholder="Write Your Code Here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button onClick={generateReview}>Generate Response</button>
        </div>

        {/* Right Box */}
        <div className="right-box">
          {loading?(<div className="loader"></div>
           ):
          <p>{code}</p>}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
