import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import {gsap} from "gsap"
export default function LandingPage() {

    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(()=>{
        const divs = containerRef.current.querySelectorAll(".fade-item");
        gsap.from(divs,{
            opacity:0,
            y:20,
            duration:0.8,
            stagger:0.2
        })
    },[])

    return (
            <div  className="min-h-screen w-full bg-black relative flex justify-center items-center">
                {/* Black Basic Grid Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "#000000",
                        backgroundImage: `
                linear-gradient(to right, rgba(75, 85, 99, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(75, 85, 99, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "40px 40px",
                    }}
                />
                <div ref={containerRef} className="w-[95%] md:w-[40%] h-[50%] border-0 border-white z-10 flex flex-col justify-start items-start gap-2">
                    <div className="fade-item text-[2rem]/8 text-white font-semibold">Prompt Repeater</div>
                    <div className="fade-item text-[1rem]/5 text-neutral-400 md:text-justify">Prompt Repeater is a web platform that lets you generate responses using pre-defined, everyday prompts, saving you from typing the same instructions repeatedly.</div>
                    <div className="h-14 w-full flex justify-start items-center gap-2">
                        <button onClick={()=>{
                            navigate("/dashboard")
                        }} className="fade-item my-2 p-2 hover:bg-neutral-300 rounded font-medium bg-neutral-200 text-black cursor-pointer">Prompt Repeater</button>
                    </div>
                    <img className="fade-item w-full h-full rounded border-2 border-neutral-900" src="/dashboard.png" alt="" />
                    <div className="fade-item w-full text-[0.5rem]/2 md:text-[0.8rem]/5 text-neutral-700 text-end">Built with React, Node and Express.</div>
                </div>
            </div>
    )
}