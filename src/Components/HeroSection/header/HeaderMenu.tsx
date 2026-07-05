import { HeaderNav } from "./domain";


import MenuIcon from "./MenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";
import Button from "../../Button";

import { useState, useEffect } from "react"


function HeaderMenu() {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    console.log(isOpenMenu)
  }, [isOpenMenu])

  return (
    <nav>
      <aside>
        <div className={`
        fixed
        top-0
        right-0
        bottom-0
        z-10
        bg-gray-main
        pt-15
        px-15
        rounded-tl-xl
        rounded-bl-xl
        
        transition-opacity 
        duration-300
        ease-in-out

        max-sm:px-10
        max-sm:w-[75%]
        ${isOpenMenu ? "visible opacity-100 pointer-events-auto" : "invisible opacity-0 pointer-events-none"}
        `}>
          <div 
          className="absolute top-3 right-5"
          onClick={() => setIsOpenMenu(prev => !prev)}>
            <CloseMenuIcon/>
          </div>
          <ul className="flex flex-col items-start text-[40px] gap-1 mb-10">
            {HeaderNav.map(item => {
              return <li key={item.link}> 
                <a 
                href={item.link}
                className="
                  uppercase 
                  font-normal
                text-white-main
                  cursor-pointer 
                hover:text-mist-100
                  transition duration-200
                  
                  max-xl:text-[20px]
                  ">
                  {item.title}
              </a>
            </li>
            })}
          </ul >
          <div>
            <Button text={"order now"}/>
          </div>
        </div>
      </aside>

      <div className="
      absolute 
      top-10 
      right-10
      
      md:hidden " 
      onClick={() => setIsOpenMenu(prev => !prev)}>
        <MenuIcon/>
      </div>
      <ul className="flex gap-8 max-md:hidden">
      {HeaderNav.map(item => {
        return <li key={item.link}> 
          <a 
            href={item.link}
            className="
            uppercase 
            font-normal
          text-mist-400 
            cursor-pointer 
          hover:text-mist-100
            transition duration-200
            
            max-xl:text-[20px]
            ">
            {item.title}
          </a>
        </li>
      })}
    </ul>
    </nav>
  )
}

export default HeaderMenu
