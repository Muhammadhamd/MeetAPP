import react from "react"

function Message({role , message , dp}){
    return(
        <div className={`w-full flex my-[5px] ${role === "myMsg" ? 'justify-end' : 'justify-start'}`}>
           <div className="flex gap-[5px]">
            {
                role === "myMsg" ? 
               <>
                <div className={` max-w-[300px] rounded-[10px_0px_10px_10px] p-[10px] ${role === "myMsg" ? 'bg-violet-500 text-white' : 'bg-slate-200'}`}>
                     <h1>{message}</h1>
                 </div>
                <img className="overflow-hidden w-[30px] h-[30px] rounded-full" src={dp} alt="" /></>

                 :
          <>
            <img className="overflow-hidden w-[30px] h-[30px] rounded-full" src={dp} alt="" />

<div className={` max-w-[300px] rounded-[0px_10px_10px_10px]  p-[10px] ${role === "myMsg" ? 'bg-violet-500 text-white' : 'bg-slate-200'}`}>
<h1>{message}</h1>
</div></>

            }
           
           </div>
        </div>
    )
}

export default Message
