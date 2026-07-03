import { HeaderNav } from "./domain"


function HeaderMenu() {

  return (
    <ul className="flex gap-8 ">
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
            transition duration-200">
            {item.title}
          </a>
        </li>
      })}
    </ul>
  )
}

export default HeaderMenu
