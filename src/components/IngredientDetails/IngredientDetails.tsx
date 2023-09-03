import IngredientDetailsStyles from './IngredientDetails.module.css';
import { ingredientType } from '../../utils/types';

function IngredientDetails({ ingredient }: { ingredient: ingredientType }) {
  const { image_large, name, calories, proteins, fat, carbohydrates } = ingredient;

  return (
    <section className={ IngredientDetailsStyles.ingredientDetails }>
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

export default IngredientDetails;
