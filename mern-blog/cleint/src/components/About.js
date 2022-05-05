import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className=" md:mt-32 fixed right-12">
                <div className="bg-gray-100 mt-40 mb-8 w-72  mt-20 shadow-md px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="mx-auto w-1/2 h-full">
                        <div>
                            <img
                                className="object-cover w-24 h-24 rounded-full shadow"
                                src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center mt-2">
                                <p className="text-lg font-bold">Emre Celik</p>
                                <p className="mb-4 text-xs text-gray-800">Software Developer</p>
                                <p className="text-sm tracking-wide text-gray-800">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunts nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;