
import AppHeaderStyles from './AppHeader.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={ `${ AppHeaderStyles.header} p-4` }>
      <nav className={ AppHeaderStyles.nav }>
        <a href='/' className={ `${ AppHeaderStyles.item } ${ AppHeaderStyles.active } pt-4 pr-5 pb-4 pl-5 mr-2 ` }>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2">Конструктор</p>
        </a>
        <a href='/' className={ `${ AppHeaderStyles.item } pt-4 pr-5 pb-4 pl-5` }>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Лента заказов</p>
        </a>
      </nav>
      <div className={ AppHeaderStyles.logo }>
        <Logo />
      </div>
      <nav>
        <a href='/' className={ `${ AppHeaderStyles.item } pt-4 pr-5 pb-4 pl-5` }>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Личный кабинет</p>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
