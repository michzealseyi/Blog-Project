/*import React, { useState } from 'react'

function NewNames() {
  const[name, setNames]=useState('')
  const[about, setAbout]=useState('')
  const[author, setAuthor]=useState('mic')

  const handleSubmit=(e)=>{
    e.preventDefault();
    const newnames={name, about, author}

    fetch("http://localhost:3000/names",{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(newnames)
    }).then(()=>{
      console.log('new name added')
    })
  }
  return (
    <div className="create">
        <h3>INPUT NEW NAMES BELOW</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            type="text"
            required
            value={name}
            onChange={(e)=>setNames(e.target.value)}
          />
          <label >About</label>
          <textarea
            required
            value={about}
            onChange={(e)=>setAbout(e.target.value)}
          ></textarea>
          <select
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
          >
            <option value="mic">mic</option>
            <option value="deji">deji</option>
            <option value="ayo">ayo</option>
          </select>
          <button>submit</button>
        </form>
        
    </div>
  )
}

export default NewNames*/

import { useNavigate } from "react-router-dom";
import { useState } from "react";
function NewNames() {
  const [name, setNames] = useState("");
  const [about, setAbout] = useState("");
  const [author, setAuthor] = useState("mic");
  const [isLoading, setIsLoading] = useState(false); //1
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newnames = { name, about, author };
    setIsLoading(true); //2
    fetch("http://localhost:3000/names", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newnames),
    }).then(() => {
      console.log("new name added");
      setIsLoading(false); //3
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h3>INPUT NEW NAMES BELOW</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setNames(e.target.value)}
        />
        <label>About</label>
        <textarea
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mic">mic</option>
          <option value="deji">deji</option>
          <option value="ayo">ayo</option>
        </select>
        {!isLoading && <button>submit</button>}
        {isLoading && <button>submitting...</button>}
      </form>
    </div>
  );
}

export default NewNames;
