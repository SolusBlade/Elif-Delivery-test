import Container from 'components/Container/Container';
import logo from '../../assets/icons/logo.svg';
import s from './Header.module.scss';

import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const getActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <div className={s.logoWrap}>
          <img src={logo} className={s.logoImg} alt="logo" />
          <span>
            <p className={s.logoText}>Elif</p>
            <p className={s.logoSecondText}>Delivery</p>
          </span>
        </div>
        <nav>
          <ul className={s.navLinks}>
            <li>
              <NavLink className={getActiveClass} to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass} to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
