import rootReducers from "./rootReducers";
import createSagaMiddleware from "redux-saga";
import saga, { productSaga } from "./saga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducers,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
