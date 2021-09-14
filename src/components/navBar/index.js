import { useEffect, useState } from "react"
import "./Style.css"

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const changeNavbarBackground = () => {
    if(window.scrollY >= 68){
      setIsScroll(true);
    }
    else{
      setIsScroll(false);
    }
  };
  window.addEventListener('scroll', changeNavbarBackground);
console.log(setIsScroll)
  return (
    <div className={`navbar ${isScroll?'scroll-down':''}`}>
      <ul>
        <li>
          <div className="logo"></div>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Tv Shows</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">Recently Added</a>
        </li>
        <li>
          <a href="/">My List</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
