import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The most important addition in React 18 is something we hope you never have to think about: concurrency. 
                        We think this is largely true for application developers, though the story may be a bit more complicated for library maintainers.
                        </p>
                        <p className="mt-4 text-gray-600">
                        React has idioms — or rules — for how to express patterns in a way that is easy to understand and yields high-quality applications:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
