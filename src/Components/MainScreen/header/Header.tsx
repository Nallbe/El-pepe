import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"
import Button from "../../Button"

function Header() {
  

  return (
    <header className="
      flex 
      justify-between
      items-center
      p-6 
      w-full
      ">
      <Logo
        className={"size-[75px]"}
      />
      <HeaderMenu
        menuItems={
          [
            'home', 
            'pages', 
            'our offer', 
            'pricing', 
            'shop',
          ]}
      />
      <Button 
        text={"order now"}
      />
    </header>
  )
}

export default Header
