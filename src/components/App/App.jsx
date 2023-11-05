import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AppHeader from 'Components/AppHeader/AppHeader';
import AuthChecked from 'Components/AuthChecked/AuthChecked';
import IngredientDetails from 'Components/IngredientDetails/IngredientDetails';
import Modal from 'Components/Modal/Modal';
import { OnlyUnAuth, OnlyAuth } from 'Components/ProtectedRoute/ProtectedRoute';
import Home from 'Pages/Home/Home';
import Feed from 'Pages/Feed/Feed';
import Login from 'Pages/Login/Login';
import Registration from 'Pages/Registration/Registration';
import ForgotPassword from 'Pages/ForgotPassword/ForgotPassword';
import ResetPassword from 'Pages/ResetPassword/ResetPassword';
import Profile from 'Pages/Profile/Profile';
import ProfileForm from 'Pages/ProfileForm/ProfileForm';
import Orders from 'Pages/Orders/Orders';
import Error from 'Pages/Error/Error';
import { ingredientsFetch } from 'Services/BurgerIngredients/BurgerIngredients.fetch';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  React.useEffect(() => dispatch(ingredientsFetch()), [dispatch]);

  const modalClose = () => navigate(-1);

  return (
    <>
      <AuthChecked />
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/login" element={ <OnlyUnAuth component={ <Login /> } /> }/>
        <Route path="/register" element={ <OnlyUnAuth component={ <Registration /> } /> } />
        <Route path="/forgot-password" element={ <OnlyUnAuth component={ <ForgotPassword /> } /> }/>
        <Route path="/reset-password" element={ <OnlyUnAuth component={ <ResetPassword /> } /> }/>
        <Route path="/profile" element={ <OnlyAuth component={ <Profile /> } /> }>
          <Route index element={ <ProfileForm /> }/>
          <Route path="orders" element={ <Orders /> }/>
        </Route>
        <Route path="/" element={ <Home /> }/>
        <Route path="/feed" element={ <Feed /> }/>
        <Route path="/ingredients/:id" element={ <IngredientDetails topic={'Детали ингредиента'} /> }/>
        <Route path="*" element={<Error />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/ingredients/:id" element={
            <Modal topic={'Детали ингредиента'} close={ modalClose }>
              <IngredientDetails />
            </Modal>
           } />
        </Routes>
      )}
    </>
  );
}

export default App;
