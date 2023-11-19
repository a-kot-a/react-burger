import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import ProtectedRouteStyles from './ProtectedRoute.module.css';

function Protected({ onlyUnAuth = false, component }: { onlyUnAuth?: boolean, component: JSX.Element, }) {
  const { isAuthChecked, user } = useSelector((state: any) => state.profile).toJS();
  const location = useLocation();

  if(!isAuthChecked) {
    return (
      <Dna
        height="120"
        width="120"
        ariaLabel="loading"
        wrapperClass={ ProtectedRouteStyles.loader }
      />
    );
  }

  if(onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: '/' } };

    return <Navigate to={ from } />
  }

  if(!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return component;
}

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: { component: JSX.Element }) => <Protected onlyUnAuth={ true } component={ component } />;
