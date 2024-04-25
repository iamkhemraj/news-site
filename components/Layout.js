import Link from "next/link";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";

export default function Layout({ children }) {
   return (
     <>
         <div className="px-2 md:px-24 bg-black text-white flex justify-between items-center h-10">
            <div className="flex items-center">
               <Link href="/" className="flex uppercase pt-1 text-2xl align-baseline">
                
                  <GiAstronautHelmet className="inline text-1xl mr-4"/> 
                  <p className="inline mr-4"> PRISMIC NEXT.JS</p> 
                  
               </Link>
            </div>
            <div className="flex items-center w-1/3 text-lg">
               <input type="text" className="bg-transparent border-b w-full border-white outline-none"/>
               <FiSearch className="-ml-8 text-1xl hover:text-pink-600 cursor-pointer"/>
            </div>
            <div className="flex items-center">
               <AiOutlineBell className="mr-2 cursor-pointer  text-2xl  hover:text-pink"/>
               <AiOutlineUser className="mr-2 cursor-pointer  text-2xl hover:text-pink"/>
            </div>
         </div>
         {children}
         <div>Footer</div>
     </>
   );
}
