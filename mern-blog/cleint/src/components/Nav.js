import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="w-full h-20 bg-blue-500 fixed z-50 shadow-gray-700 shadow-sm">
                        <div className="grid grid-cols-3 gap-4 mt-6 mx-4">
                            <Link to="/">
                            <h1 className="text-2xl text-white mr-4 cursor-pointer">Mern BLOG</h1>
                            </Link>
                            <input placeholder="Serach.." className="w-52  rounded border-2 focus:outline-none focus:border-y-amber-600"/>

                            <Link to="/add">
                                <button className="bg-orange-400 hover:bg-orange-700 transition w-28 rounded-lg text-white">Add Post</button>
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;