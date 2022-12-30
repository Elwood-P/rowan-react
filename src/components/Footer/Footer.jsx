import { Link } from 'react-router-dom';

import logo from '@/assets/images/rowan-logo.svg';
import { ReactComponent as TwitterIcon } from '@/assets/images/icons/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '@/assets/images/icons/instagram-icon.svg';
import { ReactComponent as PinterestIcon } from '@/assets/images/icons/pinterest-icon.svg';
import FooterNav from './FooterNav/FooterNav';

const Footer = () => {
  return (
    <footer className="container-fluid | my-16 | text-black leading-relaxed">
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between | gap-y-6">
        <div className="flex flex-col items-center md:items-start | gap-y-2 | text-center xs:text-left">
          <Link to="/shop">
            <img src={logo} alt="Rowan Logo" />
          </Link>

          <div>© Kimba Design</div>

          <ul className="grid gap-x-3 grid-flow-col justify-start">
            <li>
              <a href="#">
                <TwitterIcon />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <PinterestIcon />
                <span className="sr-only">Pinterest</span>
              </a>
            </li>
          </ul>
        </div>

        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
