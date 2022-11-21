import { Link } from 'react-router-dom';

const HeaderNavMenu = ({ menu }) => {
  return (
    <li className="active menu-item menu-item-has-children menu-shop">
      <h3 className="mb-2 text-100 font-semibold uppercase tracking-wide leading-loose">{menu.title}</h3>
      <menu className="text-300 leading-7">
        {menu.links.map((link) => {
          return (
            <li key={link.linkText}>
              <Link className="hover:underline" to={link.link}>{link.linkText}</Link>
            </li>
          );
        })}
      </menu>
    </li>
  );
};

export default HeaderNavMenu;
