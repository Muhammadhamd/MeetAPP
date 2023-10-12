import react from "react"


function EachInbox({name , img}){
    return(
        <div className="flex items-center border-b hover:bg-[#f6f4fdf2]">
            <div className="w-[80px] h-[80px] overflow-hiiden rounded-full">
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="">
                <h1 className="font-semibold">{name}</h1>
                <p className="text-slate-500">hey are you there....</p>
            </div>
        </div>
    )
}

export default EachInbox