import { useDispatch } from 'Services/store';
import { Outlet, NavLink, useMatch } from 'react-router-dom';
import ProfileStyles from './Profile.module.css';
import { logoutFetch } from 'Services/Login/Login.fetch'

function Profile() {
  const isOrders = useMatch('/profile/orders');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutFetch());
  }

  return (
    <div className={ `pl-9 pr-9 ${ ProfileStyles.profile }` }>
      <div className={ ProfileStyles.body }>
        <div className={ `mt-30 mr-15 ${ ProfileStyles.sidebar }` }>
          <div className={ ProfileStyles.menu }>
            <NavLink to='/profile' className={ ProfileStyles.menuItem }>
              <p className={ `text text_type_main-medium ${ isOrders ? 'text_color_inactive' : '' }` }>
                Профиль
              </p>
            </NavLink>
            <NavLink to='/profile/orders' className={ ProfileStyles.menuItem }>
              <p className={ `text text_type_main-medium ${ !isOrders ? 'text_color_inactive' : '' }` }>
                История заказов
              </p>
            </NavLink>
            <button className={ ProfileStyles.menuItem } onClick={ handleLogout }>
              <p className="text text_type_main-medium text_color_inactive">
                Выход
              </p>
            </button>
          </div>
          <p className="text text_type_main-default text_color_inactive mt-20">
            В этом разделе вы можете<br />изменить свои персональные данные
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
