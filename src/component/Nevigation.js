import { BrowserRouter, Link } from "react-router-dom"
import { AiOutlineBars,AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import './Nevigation.css'
import MenuData from "./data/MenuData";

const Nevigation = ()=>{
    const [showmenu,setShowMenu]=useState(false)
    const toggleMenu=()=>setShowMenu(!showmenu)
    return(
        <BrowserRouter>
        <aside>
            <div className="navbar">
                <div className="navbar-toggle" >
                    <Link to="#" className="menu-bar">
                        <AiOutlineBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
                <nav className={showmenu?"nav-menu active":"nav-menu"}>
                    <ul className="nav-menu-item" onClick={toggleMenu}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bar">
                                <AiOutlineCloseCircle/>
                            </Link>
                        </li>
                        {MenuData.map((menu,index)=>{
                            return(
                                <li className="menu-text" key={index}>
                                    <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        </aside>
        </BrowserRouter>
    )

}
export default Nevigation