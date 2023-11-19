import OrdersStyles from './Orders.module.css';

function Orders() {
  return (
    <div className={ OrdersStyles.orders }>
      <h1 className="text text_type_main-medium mb-6">История заказов</h1>
    </div>
  );
}

export default Orders;
