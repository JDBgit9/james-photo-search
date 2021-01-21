import React, {useState} from 'react';
import "./Home.css";

function Home() {
    const [input, setInput]=useState("")
    const flickrapi="75584617c10dcb6bdb5535174c472568"
    const flickrsecret="f36417ff7e60deac"
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
    }
    return (
        <div className="home">
            <h1>Photo Search</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search for photos" onChange={(e)=> setInput(e.target.value)} value={input}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Home
