import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Button from "../../Button";
import { HeaderNav } from "./domain";

function Header() {
  return (
    <header className="flex w-full items-center justify-between p-6">
      <Logo className={"size-[75px]"} />
      <HeaderMenu menuItems={HeaderNav} />
      <Button text={"order now"} />
    </header>
  );
}

export default Header;
