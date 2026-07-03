import HeaderMenu from "./HeaderMenu"
import Logo from "./Logo"
import Button from "../../Button"

function Header() {
  

  return (
    <header className="flex items-center justify-between  p-6 w-full">
      <Logo className={"size-20"}/>
      <HeaderMenu/>
      <Button text={"order now"}/>
    </header>
  )
}

export default Header
