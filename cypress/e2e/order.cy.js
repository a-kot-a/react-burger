describe('order is available', function () {
  const ingredient = '[data-cy=ingredient]';
  const modal = '[data-cy=modal]';
  const modalClose = '[data-cy=modal-close]';
  const constructor = '[data-cy=constructor]';
  const constructorSubmit = '[data-cy=constructor-submit]';

  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' }).as('dataLogin');
    cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' }).as('dataIngredients');
    cy.intercept('POST', 'api/orders', { fixture: 'orders.json' }).as('dataOrders');

    localStorage.setItem('accessToken', 'accessToken');
    localStorage.setItem('refreshToken', 'refreshToken');
  });

  it('should be modal ingredient', function () {
    cy.get(ingredient).eq(0).click();
    cy.get(modal).as('modal');
    cy.get('@modal').should('exist');
    cy.get('@modal').should('contain', 'Детали ингредиента');
    cy.get('@modal').should('contain', 'Краторная булка N-200i');
    cy.get('@modal').should('contain', 'Калории,ккал');
    cy.get('@modal').should('contain', '420');
    cy.get('@modal').should('contain', 'Белки, г');
    cy.get('@modal').should('contain', '80');
    cy.get('@modal').should('contain', 'Жиры, г');
    cy.get('@modal').should('contain', '24');
    cy.get('@modal').should('contain', 'Углеводы, г');
    cy.get('@modal').should('contain', '53');
    cy.get(modalClose).click();
    cy.get('@modal').should('not.exist');
  });

  it('should be drug and drop ingredient', function () {
    cy.get(ingredient).as('ingredient');
    cy.get(constructor).as('constructor');
    cy.get('@ingredient').eq(0).trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@ingredient').eq(2).trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get('@ingredient').eq(6).trigger('dragstart');
    cy.get('@constructor').trigger('drop');
    cy.get(constructorSubmit).click();
    cy.get(modal).as('modal');
    cy.get('@modal').should('exist');
    cy.get('@modal').should('contain', '29660');
    cy.get('@modal').should('contain', 'идентификатор заказа');
    cy.get('@modal').should('contain', 'Био-марсианский spicy краторный бургер');
    cy.get('@modal').should('contain', 'Ваш заказ начали готовить');
    cy.get('@modal').should('contain', 'Дождитесь готовности на орбитальной станции');
    cy.get(modalClose).click();
    cy.get('@modal').should('not.exist');
  });
});
