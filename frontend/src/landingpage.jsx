import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate();

    return (
            <div className="min-h-screen w-full bg-black relative flex justify-center items-center">
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
                <div className="w-[95%] md:w-[40%] h-[50%] border-0 border-white z-10 flex flex-col justify-start items-start gap-2">
                    <div className="text-[2rem]/8 text-white font-semibold">Prompt Repeater</div>
                    <div className="text-[1rem]/5 text-neutral-400 md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.adipisicing elit. adipisicing elit. adipisicing elit. adipisicing elit. adipisicing Possimus eos rerum exercitationem explicabo labore delectus, aspernatur doloribus porro magni mollitia.</div>
                    <button onClick={()=>{
                        navigate("/dashboard")
                    }} className="my-2 p-2 hover:text-neutral-400 border-2 border-white rounded-lg font-medium hover:bg-black bg-white text-black transtion-all delay-50 duration-100 cursor-pointer">Get Started</button>
                    <img className="w-full h-full rounded border-2 border-neutral-900" src="/dashboard.png" alt="" />
                    <div className="w-full text-[0.5rem]/2 md:text-[0.8rem]/5 text-neutral-700 text-end">Built with React, Node and Express.</div>
                </div>
            </div>
    )
}