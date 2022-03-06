import { useState, useEffect } from 'react';

function Articles() {
  const [inputText, setInputText] = useState("");
  const [myInputs, setMyInputs] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("/articles");
    const data2 = await data.json();
    setMyInputs(data2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = { inputText };
    fetch("/articles", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify(newText)
    }).then(() => {
      console.log("article saved");
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Enter Any Text: </label>
          <input
            type="text"
            required
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}/>
          <button>Save Article</button>
      </form>
      <div>
        {myInputs && 
            myInputs.map(result =>(
              <p key={result._id}>{result.inputText}</p>
            ))
        }
      </div>
    </div>
  )
}

export default Articles;
