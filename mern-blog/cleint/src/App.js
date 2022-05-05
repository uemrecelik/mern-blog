import React, {useEffect, useState} from "react";
import Nav  from "./components/Nav"
import About from "./components/About";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import {Routes, Route} from "react-router-dom";

function App() {


    const [posts,setPosts] = useState([]);
    const getData =async () => {
        const response = await  fetch("http://localhost:3030/api/all");
        const data = await response.json();
        setPosts(data);
    }
    useEffect(() => {
        getData();
    }, [])
    console.log(posts);
  return (
    <div className="App">
      <Nav/>
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                {posts.map((post,index) => (
                    <Post key={index} post={post} />
                ))}                                  
            </div>
            <About/>
        </div>

            <Routes>
                <Route path="add" element={<AddPost/>}/>
            </Routes>

    </div>
  );
}

export default App;
