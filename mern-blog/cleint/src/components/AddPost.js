import React, {useState} from 'react';
import axios from "axios";

const  AddPost= ()=> {

    const [title , setTitle] = useState('')
    const [content , setContent] = useState('')
    const [imgURL , setImgURL] = useState('')

    console.log(title);
  const  handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3030/add',{
        title,
        content,
        imgURL
    } ).then((res) => {console.log(res)})
}

        return (
            <div className="fixed right-1/2 top-1/2 w-52 h-52 bg-gray-400">
                <div className="flex justify-center">
                    <form>
                        <input
                        value={title}
                        className="flex mx-4 my-2"
                        placeholder="Title"
                        onChange={(e) => {setTitle(e.target.value)}}
                        />
                        <input
                            value={content}
                            className="flex mx-4 my-2"
                            placeholder="Content"
                            onChange={(e) => {setContent(e.target.value)}}
                        />
                        <input
                            value={imgURL}
                            className="flex mx-4 my-2"
                            placeholder="imgURL"
                            onChange={(e) => {setImgURL(e.target.value)}}
                    />
                        <button
                        onClick={handleSubmit}
                        className="mx-4 bg-orange-400 rounded-lg"
                        >Submit</button>
                    </form>
                </div>

            </div>
        );

}

export default AddPost;