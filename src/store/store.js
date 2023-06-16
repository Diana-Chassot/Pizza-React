import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from '../features/shoppingCartSlice';
import menuSlice from '../features/menuSlice';
import formSlice from '../features/formSlice';
const rootReducer = {
    shoppingCart: shoppingCartSlice,
    menu: menuSlice,
    form: formSlice

};

const store = configureStore({
    reducer: rootReducer,
});

export { store };