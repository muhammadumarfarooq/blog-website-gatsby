import dataContext from "./dataContext";


const storeReducer = (state, action) => {
  return state;
};

const handleSubmit = () => {

};

export const { Provider, Context } = dataContext(
  storeReducer,
  {
    handleSubmit
  },
  {
    isUserLoggedIn: null
  }
);
