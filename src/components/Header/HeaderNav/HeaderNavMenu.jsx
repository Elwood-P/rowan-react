import { Link } from 'react-router-dom';

const HeaderNavMenu = ({ menu }) => {
  return (
    <li className="active menu-item menu-item-has-children menu-shop">
      <h3>{menu.title}</h3>
      <menu>
        {menu.links.map((link) => {
          return (
            <li key={link.linkText}>
              <Link to={link.link}>{link.linkText}</Link>
            </li>
          );
        })}
      </menu>
    </li>
  );
};

export default HeaderNavMenu;
