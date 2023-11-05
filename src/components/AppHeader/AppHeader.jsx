
import AppHeaderStyles from './AppHeader.module.css';
import { NavLink } from 'react-router-dom';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  const icons = {
    burger: BurgerIcon,
    list: ListIcon,
    profile: ProfileIcon,
  };

  const Link = ({to, icon, name}) => {
    const Icon = icons[icon];

    return (
      <NavLink
        to={ to }
        className={({ isActive }) =>
          `pt-4 pr-5 pb-4 pl-5 ${ AppHeaderStyles.item } ${ isActive ? AppHeaderStyles.itemActive : '' }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon type={ isActive ? 'primary' : 'secondary' } />
            <p className="text text_type_main-default ml-2">{ name }</p>
          </>
        )}
      </NavLink>
    )
  }

  return (
    <header className={ AppHeaderStyles.header }>
      <div className={ `${ AppHeaderStyles.body} p-4`}>
        <nav className={ AppHeaderStyles.nav }>
          <Link to="/" name="Конструктор" icon="burger" />
          <Link to="/feed" name="Лента заказов" icon="list" />
        </nav>
        <NavLink to="/" className={ AppHeaderStyles.logo }>
          <Logo />
        </NavLink>
        <nav>
          <Link to="/profile" name="Личный кабинет" icon="profile" />
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
