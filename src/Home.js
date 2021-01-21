import React, {useState} from 'react';
import "./Home.css";
import $ from "jquery";

function Home() {
    const [input, setInput]=useState("")
    const flickrapi="75584617c10dcb6bdb5535174c472568"
    const flickrsecret="f36417ff7e60deac"
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(input)
        $.ajax(`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${flickrapi}&tags=${input}`).done(response=>{
            console.log(response)
        })
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
