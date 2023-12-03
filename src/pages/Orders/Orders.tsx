import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'Services/store';
import { wsConnect, wsDisconnect } from 'Services/Orders/Orders.actions';
import OrderItem from 'Components/OrderItem/OrderItem';
import OrdersStyles from './Orders.module.css';
import { ORDERS_URL } from 'Utils/request';

function Orders() {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(wsConnect(`${ ORDERS_URL }`));

    return () => {
      dispatch(wsDisconnect());
    }
  }, [dispatch]);

  if(!orders?.length) {
    return (
      <Dna
        height="120"
        width="120"
        ariaLabel="loading"
        wrapperClass={ OrdersStyles.loader }
      />
    );
  }

  return (
    <div className={ `${ OrdersStyles.orders } mt-10` }>
      <div className={ `${ OrdersStyles.list }` }>
          {
            [...orders]
            .sort((a, b) => b.number - a.number)
            .map(i => (
              <Link
                key={ i._id }
                to={ `/profile/orders/${i.number}` }
                state={{ backgroundLocation: location }}
                className={ OrdersStyles.item }
              >
                <OrderItem showStatus={ true } { ...i } />
              </Link>
            ))
          }
        </div>
    </div>
  );
}

export default Orders;
