import React, {Component} from 'react';

const Post  = ({post:{_id ,title,content,imgURL}}) => {
   {
        return (

            <div className="pt-20">
                <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                        <div className="relative lg:w-1/2">
                            <img
                                src={imgURL}
                                alt={imgURL}
                                className="object-cover w-full lg:absolute h-80 lg:h-full"
                            />

                        </div>
                        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                                {title}
                            </h5>
                            <p className="mb-5 text-gray-800">
                                <span className="font-bold">Lorem ipsum</span> {content}
                            </p>
                            <div className="flex items-center">
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn More
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Post;