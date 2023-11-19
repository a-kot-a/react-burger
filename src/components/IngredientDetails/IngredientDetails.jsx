import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import IngredientDetailsStyles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';

function IngredientDetails({ topic }) {
  const { ingredients } = useSelector(state => state.burgerIngredients).toJS();
  const { id } = useParams();

  const ingredient = ingredients.find(i => i._id === id);

  if(!ingredients.length) {
    return null;
  }

  if(!ingredient) {
    return <Navigate to='/404' />
  }

  const {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates
  } = ingredient;

  return (
    <section className={ IngredientDetailsStyles.ingredientDetails }>
      {
        topic &&
          <h2 className={ `${ IngredientDetailsStyles.topic} text text_type_main-large` }>
            { topic }
          </h2>
      }
      <div className={ IngredientDetailsStyles.img }>
        <img src={ image_large } alt={ name } />
      </div>
      <h2 className={ `${ IngredientDetailsStyles.title } text text_type_main-medium mt-4` }>
        { name }
      </h2>
      <div className={ `${ IngredientDetailsStyles.params } mt-8` }>
        <div className={ `${ IngredientDetailsStyles.paramsItem } mr-5` }>
          <p className={ `${ IngredientDetailsStyles.paramsTitle } text text_type_main-default` }>
            Калории,ккал
          </p>
          <p className={ `${ IngredientDetailsStyles.paramsText } text text_type_digits-default mt-2` }>
            { calories }
          </p>
        </div>
        <div className={ `${ IngredientDetailsStyles.paramsItem } mr-5` }>
          <p className={ `${ IngredientDetailsStyles.paramsTitle } text text_type_main-default` }>
            Белки, г
          </p>
          <p className={ `${ IngredientDetailsStyles.paramsText } text text_type_digits-default mt-2` }>
            { proteins }
          </p>
        </div>
        <div className={ `${ IngredientDetailsStyles.paramsItem } mr-5` }>
          <p className={ `${ IngredientDetailsStyles.paramsTitle } text text_type_main-default` }>
            Жиры, г
          </p>
          <p className={ `${ IngredientDetailsStyles.paramsText } text text_type_digits-default mt-2` }>
            { fat }
          </p>
        </div>
        <div className={ `${ IngredientDetailsStyles.paramsItem } mr-5` }>
          <p className={ `${ IngredientDetailsStyles.paramsTitle } text text_type_main-default` }>
            Углеводы, г
          </p>
          <p className={ `${ IngredientDetailsStyles.paramsText } text text_type_digits-default mt-2` }>
            { carbohydrates }
          </p>
        </div>
      </div>
    </section>
  );
}

IngredientDetails.propTypes = {
  topic: PropTypes.string,
};

export default IngredientDetails;
