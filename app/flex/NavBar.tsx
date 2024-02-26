"use client";
import { useState } from "react";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

 console.log(typeof(isOpen),"What isOpen?")
  console.log(typeof(setIsOpen),"What isSetIsOpen?")



  return (
    <>
      {!isOpen ? (

        <div className="fixed top-1/2 z-40 float-right">
          <button>
            <span className="absolute bg-green-400" onClick={() => setIsOpen(!isOpen)}>Open</span>
          </button>
        </div>
      ) : (
<>
      <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300 flex 1 shrink flex-col overflow-x-hidden bg-slate-600 border-slate-600 text-white p-2`}>
        <nav className="flex h-full w-full flex-col px-3 pb-3.5">
          <ul className="p-2 flex flex-col gap-4">
            <li>Home</li>
            <li>Beach</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Condolences</li>
          </ul>
        </nav>




      </div>
 <div className="fixed top-1/2 z-40">
          <button>
            <span className="absolute bg-green-400" onClick={() => setIsOpen(!isOpen)}>close</span>
          </button>
        </div>
      </>
      )}
    </>
  );
}
