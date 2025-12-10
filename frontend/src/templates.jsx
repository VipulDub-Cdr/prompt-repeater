import { useState } from "react"

export default function Templates(){

    const [to,setto] = useState(null);
    const [subject,setsubject] = useState(null);
    const [message, setmessage] = useState(null);


    return(
        <div className="min-h-screen w-full bg-black relative">
            <div className="w-full h-screen flex flex-col justify-center items-center z-10">
                <div className="h-[90%] w-[50%] border-0 border-white flex flex-col justify-start items-center px-4 gap-4">
                    <div className="text-2xl text-white text-center font-bold pb-4">Template</div>
                    
                    <input placeholder="To:" className="w-full h-10 text-neutral-400 ring-2 ring-neutral-800 rounded bg-neutral-900 p-2" type="text" />
                    <input onChange={(e)=>setsubject(e.target.value)} placeholder="Subject" value="Application for MERN " className="w-full h-10 ring-2 ring-neutral-800 rounded bg-neutral-900 p-2 text-neutral-400" type="text" />
                </div>
            </div>    
        </div>
    )
}