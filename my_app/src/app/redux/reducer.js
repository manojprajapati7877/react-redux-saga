const productData = (data = [], action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      console.log("actions ______", action);
      return [...action.data] ;

    default:
      return data;
  }
};
export default productData