import React from 'react';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    getIngredients();
  }, [])

  const API_URL = 'https://norma.nomoreparties.space';

  const getIngredients = () => {
    fetch(`${API_URL}/api/ingredients`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка ${ res.status }`);
      })
      .then(result => {
        if(result.success) {
          setIngredients(result.data);
        } else {
          throw new Error(`Ошибка ${ result }`);
        }
      })
      .catch(console.error);
  };

  return (
    <div className={ AppStyles.app }>
      <AppHeader />
      <main className={ AppStyles.body }>
        <div className={ `${ AppStyles.item } mr-10` }>
          <BurgerIngredients ingredients={ ingredients } />
        </div>
        <div className={ AppStyles.item }>
          <BurgerConstructor ingredients={ ingredients } />
        </div>
      </main>
    </div>
  );
}

export default App;
