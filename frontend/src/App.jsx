import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Copy, CopyCheck } from "lucide-react";
import {gsap} from "gsap"; 
function App() {

  const [resul1load, setresul1load] = useState(false);
  const [p1, setp1] = useState(true);
  const [p2, setp2] = useState(false);
  const [p3, setp3] = useState(false);
  const [soln, setsoln] = useState(null);
  const [content, setcontent] = useState("Response");
  const [copied, setCopied] = useState(false);
  const [passcode, setPasscode] = useState(0);


  const prompt1 = "Generate very short revision notes for the DSA question. First include the question, sample input and answer, and constraints, followed by the approaches (mention all the approaches which i have used in case there are multiple) I used in the given solution. Also mention the additional points that I included in the solution. Do not add any introductory sentence like Here are the revision notes or anything similar. Start directly with the content. Output must be in plain text only Do NOT use markdown, headings, bullets, bold, or any special formatting."
  const prompt2 = "Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Similique, dignissimos sapiente ullam corrupti placeat quis iste recusandae eveniet. Aliquid, iste."
  const prompt3 = "Lorem3 ipsum dolor sit amet consectetur adipisicing elit. Similique, dignissimos sapiente ullam corrupti placeat quis iste recusandae eveniet. Aliquid, iste."


  async function getResponse() {
    let p = p1 ? prompt1 : p2 ? prompt2 : prompt3;
    let response = await fetch("https://prbackend-tan.vercel.app/api/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passcode,
        prompt: p,
        solution: soln,
      }),
    });
    let body = await response.json();
    if(!response.ok){
      setresul1load(false);
      setcontent(body.message);
      return;
    }
    setcontent(body.response);
    setresul1load(false);
  }

  return <div className='w-full h-full min-h-screen flex flex-col justify-start items-center bg-black'>

    <div className='w-full h-14 text-white text-xl flex justify-center items-center font-semibold gap-6'>
      <div>Prompt Repeater</div>
    </div>

    <div className='w-full flex flex-col md:flex-row justify-center items-start border-0 border-white'>

      <div className='w-full md:w-1/3 h-full md:h-[91.5vh] bg-black p-4 flex flex-col justify-start items-start gap-4'>
        
        <div className='w-full text-md text-white flex justify-start items-start gap-2'>
          <button onClick={() => { setp1(true); setp2(false); setp3(false); }} className={`w-1/3 md:w-1/5 text-md border-2 border-neutral-800 rounded-md cursor-pointer hover:bg-neutral-900 ${p1 ? "bg-neutral-900 text-white" : ""} `}>Prompt-1</button>
          <button onClick={() => { setp1(false); setp2(true); setp3(false); }} className={`w-1/3 md:w-1/5 text-md border-2 border-neutral-800 rounded-md cursor-pointer hover:bg-neutral-900 ${p2 ? "bg-neutral-900 text-white" : ""}`}>Prompt-2</button>
          <button onClick={() => { setp1(false); setp2(false); setp3(true); }} className={`w-1/3 md:w-1/5 text-md border-2 border-neutral-800 rounded-md cursor-pointer hover:bg-neutral-900 ${p3 ? "bg-neutral-900 text-white" : ""}`}>Prompt-3</button>
        </div>
        <div className='w-full h-[20vh] overflow-scroll overflow-x-hidden p-4 text-white ring-2 ring-neutral-800 rounded-sm text-justify text-[1rem]'>{p1 ? prompt1 : p2 ? prompt2 : prompt3}</div>
        <input
          placeholder='Passcode'
          type="password"
          className="w-full p-4 bg-black ring-2 ring-neutral-800 text-white rounded"
          onChange={(e) => {
            setPasscode(e.target.value);
          }} />
        <input
          placeholder='Enter the Content'
          type="text"
          className="w-full p-4 bg-black ring-2 ring-neutral-800 text-white rounded"
          onChange={(e) => {
            setsoln(e.target.value);
          }}
        />
        <button onClick={() => { getResponse();setresul1load(true); }} className='w-14 text-white text-lg ring-2 ring-neutral-800 rounded-sm hover:bg-neutral-900 transition-all delay-50 duration-200 cursor-pointer  '>Send</button>
      </div>

      <div className='relative w-full md:w-[66vw] h-[91.5vh] border-0 border-white flex justify-center items-center py-4'>

        <div className='w-full h-full border-2 border-neutral-800 flex justify-center items-center rounded p-4 '>
          {resul1load ? <div className='text-white animate-pulse'>Generating Results</div> : <pre className='w-full h-full text-white text-lg font-medium overflow-scroll text-[1rem]'>{content}</pre>}
        </div>

        {/* copy button */}
        <div className='top-4 right-4'>
          {!copied ? <Copy onClick={() => {
            navigator.clipboard.writeText(content == null ? "" : content); setCopied(true);
          }} className='absolute top-8 right-4 size-4 stroke-white cursor-pointer' /> : <CopyCheck onClick={() => {
            navigator.clipboard.writeText(""); setCopied(false);
          }} className='absolute top-8 right-4 size-4 stroke-white cursor-pointer' />}
        </div>
      </div>
    </div>

  </div>


}

export default App
