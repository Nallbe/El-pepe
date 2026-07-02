
type HeaderMenuProps = {
  menuItems: string[]
}

function HeaderMenu(props: HeaderMenuProps) {

  const {menuItems} = props


  return (
    <ul className="flex gap-8 ">
      {menuItems.map(item => {
        return <li className="
          uppercase 
          font-normal
          text-mist-400 
          cursor-pointer 
            hover:text-mist-100
            transition duration-200
            ">{item}</li>
      })}
    </ul>
  )
}

export default HeaderMenu
