import INIT_STATE from '../constant';
import { getType } from 'redux/actions/products';
import * as productActions from '../actions/products';

export default function productsReducer(state = INIT_STATE.products, action) {
  switch (action.type) {
    // get product
    case getType(productActions.getProducts.getProductsRequest):
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case getType(productActions.getProducts.getProductsSuccess):
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isSuccess: true,
      };
    case getType(productActions.getProducts.getProductsFailure):
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };

    default:
      return state;
  }
}
