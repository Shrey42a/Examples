import React from "react";

function Navbar() {
    return (
        <>
            <div oncontextmenu="return false;" className="h-20  fixed w-full bg-zinc-400 flex justify-center items-center">
                <div className="h-4/5 w-full justify-between items-center px-8 flex">
                    <div><h1 className="text-2xl font-bold text-neutral-700">Shrey Kumar</h1></div>
                    <div className="flex space-x-4">
                        <h1 className="text-zinc-700 text-lg font-thin">Home</h1>
                        <h1 className="text-zinc-700 text-lg font-thin">About</h1>
                        <h1 className="text-zinc-700 text-lg font-thin">Services</h1>
                        <h1 className="text-zinc-700 text-lg font-thin">Contact</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;