// saga.js
import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  try {
    // Use axios instead of fetch for consistency and ease of use
    const response = yield axios.get("https://product-xr6n.onrender.com/products");
    const data = response.data; // Assuming the response is in JSON format
    console.log("productData", data);
    yield put({ type: "SET_PRODUCT_LIST", data });
  } catch (error) {
    console.error("Error fetching product data:", error);
    // Optionally dispatch an error action here if needed
  }
}

export function* productSaga() {
  yield takeEvery("PRODUCT_LIST", getProducts);
}
