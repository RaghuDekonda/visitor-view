import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-slate-300 h-16 items-center px-16 py-4 flex">
            <h1 className="text-5xl text-center font-bold">-{'>'}Visitors Management Service{'<-'}</h1>
            <div className="space-x-4 ml-auto"> 
                <a className="hover:text-green-800 text-2xl font-bold" href="/">Home</a>
                <a className="hover:text-green-800 text-2xl font-bold" href="/">Profile</a>
                <a className="hover:text-green-800 text-2xl font-bold" href="/">Logout</a>
            </div>
        </div>
    );
};

export default Navbar;