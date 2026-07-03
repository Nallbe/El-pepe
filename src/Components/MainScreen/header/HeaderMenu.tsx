import type { HeaderNavType } from "./domain";

type HeaderMenuProps = {
  menuItems: HeaderNavType[];
};

function HeaderMenu(props: HeaderMenuProps) {
  const { menuItems } = props;

  return (
    <ul className="flex gap-8">
      {menuItems.map(({ title, link }) => {
        return (
          <li className="cursor-pointer font-normal text-mist-400 uppercase transition duration-200 hover:text-mist-100">
            <a href={link}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default HeaderMenu;
