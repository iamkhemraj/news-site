// Component 
import Link from "next/link";
import { Component } from "react";
import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiAstronautHelmet } from "react-icons/gi";

export default function Layout({ children }) {
   return (
      <header className="header">
         <div className="header__section">
            <div className="header__heading">
               <h3><GiAstronautHelmet/> Momento</h3> 
            </div>
            <div className="header__search__bar">
               <FiSearch/>
            </div>
            <div className="header__userhead">
               <AiOutlineUser/>
               <AiOutlineBell/>
            </div>
         </div>
      </header>
   );
}
