import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import AppStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className={ AppStyles.app }>
      <AppHeader />
      <DndProvider backend={HTML5Backend}>
        <main className={ AppStyles.body }>
          <div className={ `${ AppStyles.item } mr-10` }>
            <BurgerIngredients />
          </div>
          <div className={ AppStyles.item }>
            <BurgerConstructor />
          </div>
        </main>
      </DndProvider>
    </div>
  );
}

export default App;
