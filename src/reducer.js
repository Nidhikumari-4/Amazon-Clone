export const initialState = {
  basket: [
    {
      id: "12312",
      title: "boAt Rockerz 255 Pro+ V5.0 Wireless in Ear Earphones ",
      price: "1599",
      rating: "4",
      image: "https://m.media-amazon.com/images/I/515jdxLlmaL._AC_UY218_.jpg",
    },
    {
      id: "12312",
      title: "boAt Rockerz 255 Pro+ V5.0 Wireless in Ear Earphones ",
      price: "1599",
      rating: "4",
      image: "https://m.media-amazon.com/images/I/515jdxLlmaL._AC_UY218_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket remove it
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
