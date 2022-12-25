import React from "react";

function Page() {
    return (
        <>
            <div onContextMenu="return false;" className="pt-24 h-max space-y-4 flex flex-col justify-center items-center p-8 w-full">
                <div oncontextmenu="return false;" className="shadow-inner flex justify-center items-center p-2 shadow-zinc-700 h-full w-4/5 bg-gradient-to-bl from-rose-300 via-teal-200 to-lime-200">
                    <img className="h-4/5 w-4/5" src="https://images.wallpaperscraft.com/image/single/cobweb_darkness_blur_566643_6000x4000.jpg"></img>
                </div>
                <div oncontextmenu="return false;" className="shadow-inner flex justify-center items-center p-2 shadow-zinc-700 h-full w-4/5 bg-gradient-to-bl from-rose-300 via-teal-200 to-lime-200">
                    <img className="h-4/5 w-4/5" src="https://images.wallpaperscraft.com/image/single/cobweb_darkness_blur_566643_6000x4000.jpg"></img>
                </div>
            </div>
        </>
    )
}
export default Page;