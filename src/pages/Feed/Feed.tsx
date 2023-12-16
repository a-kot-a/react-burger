import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dna } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'Services/store';
import { wsConnect, wsDisconnect } from 'Services/Feed/Feed.actions';
import OrderItem from 'Components/OrderItem/OrderItem';
import FeedStyles from './Feed.module.css';
import { ORDERS_ALL_URL } from 'Utils/request';

function Feed() {
  const { orders, total, totalToday } = useSelector((state) => state.feed);
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(wsConnect(ORDERS_ALL_URL));

    return () => {
      dispatch(wsDisconnect());
    }
  }, [dispatch]);

  const ordersReady = orders.filter( i => i.status === 'done');
  const ordersReadyColumns = Array.from(
    { length: Math.ceil(ordersReady.length / 10) },
    (n, i) => ordersReady.slice(i * 10, (i + 1) * 10)
  );

  const ordersPending = orders.filter( i => i.status === 'pending');
  const ordersPendingColumns = Array.from(
    { length: Math.ceil(ordersPending.length / 10) },
    (n, i) => ordersPending.slice(i * 10, (i + 1) * 10)
  );

  if(!orders.length) {
    return (
      <Dna
        height="120"
        width="120"
        ariaLabel="loading"
        wrapperClass={ FeedStyles.loader }
      />
    );
  }

  return (
    <div className={ `${ FeedStyles.feed } pl-9 pr-9 pt-10` }>
      <h1 className="text text_type_main-large mb-5">Лента заказов</h1>
      <div className={ `${ FeedStyles.body }` }>
        <div className={ `${ FeedStyles.list }` }>
          {
            orders.map(i => (
              <Link
                key={ i._id }
                to={ `/feed/${i.number}` }
                state={{ backgroundLocation: location }}
                className={ FeedStyles.item }
              >
                <OrderItem { ...i } />
              </Link>
            ))
          }
        </div>
        <div className={ `${ FeedStyles.content }` }>
          <div className={ `${ FeedStyles.status }` }>
            <div className={ `${ FeedStyles.statusColumn } ${ FeedStyles.statusColumn_mod_ready }` }>
              <h3 className={ `${ FeedStyles.statusTopic } text text_type_main-medium mb-6` }>
                Готовы:
              </h3>
              <div className={ `${ FeedStyles.statusList }` }>
                {
                  ordersReadyColumns.map((group, key) => (
                    <div key={ key } className={ `${ FeedStyles.statusCell }` }>
                      {
                        group.map(order => (
                          <p key={ order._id } className={ `${ FeedStyles.statusText } text text_type_digits-default` }>
                            { order.number }
                          </p>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={ `${ FeedStyles.statusColumn }` }>
              <h3 className={ `${ FeedStyles.statusTopic } text text_type_main-medium mb-6` }>
                В работе:
              </h3>
              <div className={ `${ FeedStyles.statusList }` }>
                {
                  ordersPendingColumns.map((group, key) => (
                    <div key={ key } className={ `${ FeedStyles.statusCell }` }>
                      {
                        group.map(order => (
                          <p key={ order._id } className={ `${ FeedStyles.statusText } text text_type_digits-default` }>
                            { order.number }
                          </p>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={ `${ FeedStyles.feedTotal } mt-15` }>
            <p className={ `${ FeedStyles.feedTotalTitle } text text_type_main-medium` }>
              Выполнено за все время:
            </p>
            <p className={ `${ FeedStyles.feedTotalCount } text text_type_digits-large` }>
              { total?.toLocaleString('ru') }
            </p>
          </div>
          <div className={ `${ FeedStyles.feedToday } mt-15` }>
            <p className={ `${ FeedStyles.feedTodayTitle } text text_type_main-medium` }>
              Выполнено за сегодня:
            </p>
            <p className={ `${ FeedStyles.feedTodayCount } text text_type_digits-large` }>
              { totalToday?.toLocaleString('ru') }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
