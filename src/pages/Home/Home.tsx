import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import HomeStyles from './Home.module.css';
import BurgerIngredients from 'Components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from 'Components/BurgerConstructor/BurgerConstructor';

function Home() {
  return (
    <div className={ HomeStyles.home }>
      <DndProvider backend={HTML5Backend}>
        <main className={ HomeStyles.body }>
          <div className={ `${ HomeStyles.item } mr-10` }>
            <BurgerIngredients />
          </div>
          <div className={ HomeStyles.item }>
            <BurgerConstructor />
          </div>
        </main>
      </DndProvider>
    </div>
  );
}

export default Home;
