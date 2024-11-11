import React from "react";
import { GiCheckMark } from "react-icons/gi";
const Skill =() =>{
    return(
          <div id="skill">
         <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
         <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
          skills section..
          </h2>
         <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          My Skills..
         </h1>
         </div>
         <div className="flex flex-wrap -m-4 -mt-[5rem]">
         {/* skills */}
          <div className="p-4 w-[100%] md:w-1/3">
         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <GiCheckMark / >
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-xl">
               <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]">
               </div>
               </div>
               <p className="font-bold text-blue-500 text-right">100%</p>
         
         </div>
         </div>
         
           </div>

          {/* skills */}
          <div className="p-4 w-[100%] md:w-1/3">

          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <GiCheckMark / >
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-xl">
               <div className="absolute bg-blue-500 h-1 rounded-xl w-[95%]">
               </div>
               </div>
               <p className="font-bold text-blue-500 text-right">95%</p>
         
         </div>
          </div>
        
         </div>
          {/* skills */}
          <div className="p-4 w-[100%] md:w-1/3">


          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <GiCheckMark / >
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Javascrip/typescript
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-xl">
               <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]">
               </div>
               </div>
               <p className="font-bold text-blue-500 text-right">90%</p>
         
         </div>
          </div>
        
         
          </div>

          {/* skills */}
          <div className="p-4 w-[100%] md:w-1/3">


          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <GiCheckMark / >
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Nextjs
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-xl">
               <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]">
               </div>
               </div>
               <p className="font-bold text-blue-500 text-right">80%</p>
         
         </div>
          </div>
        
         
          </div>

          {/* skills */}
          <div className="p-4 w-[100%] md:w-1/3">


          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <GiCheckMark / >
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            data anotation
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded-xl">
               <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]">
               </div>
               </div>
               <p className="font-bold text-blue-500 text-right">100%</p>
         
         </div>
          </div>
        
         
          </div>



          </div>



     </div>
     </section>
     </div>
    )
}

export default Skill;