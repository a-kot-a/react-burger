export const ingredients = [
  {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
    id: "b1b23242-9fae-4aa5-9965-97a19e4ee464",
  },
  {
    _id: "643d69a5c3f7b9001cfa094a",
    name: "Сыр с астероидной плесенью",
    type: "main",
    proteins: 84,
    fat: 48,
    carbohydrates: 420,
    calories: 3377,
    price: 4142,
    image: "https://code.s3.yandex.net/react/code/cheese.png",
    image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
    __v: 0,
    id: "ec6cf25f-53d2-4217-8b59-a88dd10b846a",
  },
  {
    _id: "643d69a5c3f7b9001cfa0941",
    name: "Биокотлета из марсианской Магнолии",
    type: "main",
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: "https://code.s3.yandex.net/react/code/meat-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
    __v: 0,
    id: "fe6f3836-5af2-4d8e-bc32-574380cdced3",
  }
];

export const ingredient = ingredients.find(i => i.type === 'main');
export const bun = ingredients.find(i => i.type === 'bun');

export const orders = [
  {
    createdAt: "2023-12-04T21:34:00.342Z",
    ingredients: ["643d69a5c3f7b9001cfa0943"],
    name: "Space бургер",
    number: 28257,
    status: "done",
    updatedAt: "2023-12-04T21:34:00.598Z",
    _id: "656e45c87fd657001ba07025",
  },
  {
    createdAt: "2023-12-06T00:44:48.815Z",
    ingredients: ["643d69a5c3f7b9001cfa0943"],
    name: "Space бургер",
    number: 28353,
    status: "done",
    updatedAt: "2023-12-06T00:44:49.124Z",
    _id: "656fc4007fd657001ba07364",
  }
];

export const orderDetails = {
  _id: "65730aed7fd657001ba07a32",
  ingredients: [
      "643d69a5c3f7b9001cfa0943",
      "643d69a5c3f7b9001cfa093c",
      "643d69a5c3f7b9001cfa093c"
  ],
  owner: "6545bc5f52b4cf001d8701f1",
  status: "done",
  name: "Краторный space бургер",
  createdAt: "2023-12-08T12:24:13.886Z",
  updatedAt: "2023-12-08T12:24:14.221Z",
  number: 28613,
  __v: 0
};

export const ordersFeed = { orders, total: 29094, totalToday: 108 };
