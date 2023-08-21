import React, { useState, useEffect } from "react";

function App() {
  const [count,setCount]=useState(0)
  const [text,setText] = useState("")
  useEffect(()=>{
document.title = text;
  }, [text])

  useEffect(() => {
    setTimeout(()=> setCount(0), 5000);
  },[])
  console.log("Component rendering");

  return(
    <>
   <button onClick={setCount((count)=> count + 1)}>Clicked Me {count} Times</button>
   <input
   type = "text"
   placeholder="Type away"
   value={text}
   onChange={(e) => setText(e.target.value)}
   />
   </>
   );
}

export default App;
