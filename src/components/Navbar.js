//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';

import { Component } from "react";
import { Menudata } from "./Menudata";
import "./Navbar.css"

class Navbar extends Component{
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="Logo">SVP <i className="fab fa-react" ></i></h1>
        <ul className="Navmenu">
          {Menudata.map((item,index)=>{
            return(
              <li key={index}>
                <a href={item.url} 
                className={item.cName}>
                  <i className={item.icon}></i>{item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;