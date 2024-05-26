// import {frameworks} from "../constants"

import frameworks from "../constants"
import { useInView } from 'react-intersection-observer';



const Framework = () => {
  const loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis, illum ipsam quo distinctio omnis fugit est expedita, sint velit."
  const prosContStyle = "odd:border-l even:border-r even:justify-end border-slate-600 py-5 flex"


  const points = document.querySelectorAll("#point")




  

  return (
    <div className="md:px-10 lg:px-20 px-5 py-20">
      {frameworks.map((framework)=>(
        <div className="flex flex-col mb-10" key={framework.name} id={framework.name}>
          <h2 className="text-3xl border-slate-700 border-b-[1px] pb-5 mb-5 flex space-x-2">
              <span className="text-sky-400 text-3xl"><i className={framework.icon}></i></span>
              <span className="text-white">{framework.name}</span>
          </h2>
          <div className="flex-col flex md:flex-row px-2 md:px-2">
            <div className="flex flex-col w-full md:w-1/2 p-2 md:p-5 md:border-r border-slate-700 gap-8">
              <h2 className="text-sky-400 font-bold text-xl rounded-full tracking-widest">Pros</h2>
              <div className="flex flex-wrap">
                {framework.pros.map((pro)=>(
                  <p className="bg-slate-800 backdrop-blur-lg py-5 px-5 border border-slate-700 rounded-xl text-zinc-100 w-full mb-5 flex flex-col space-y-2" id="point">
                    <span className="text-xl"> {pro.title}</span>
                    <span>{pro.text}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/2 p-2 md:p-5  border-slate-700 gap-8">
              <h2 className="text-sky-400 font-bold text-xl rounded-full tracking-widest">Cons</h2>
              <div className="flex flex-wrap">
                {framework.cons.map((con)=>(
                  <p  className="bg-slate-800 backdrop-blur-lg py-5 px-5 border border-slate-700 rounded-xl text-zinc-100 w-full mb-5 flex flex-col space-y-2" id="point">
                    <span className="text-xl"> {con.title}</span>
                    <span>{con.text}</span>
                  </p>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default Framework
