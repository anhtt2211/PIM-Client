import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
import productApi from '../../api/productApi';
import * as productActions from '../actions/products';

export function* productSaga() {
  yield takeLatest(productActions.getProducts.getProductsRequest, fetchProductsSaga);
}

function* fetchProductsSaga(action) {
  try {
    const products = yield call(productApi.getAll);
    yield put(productActions.getProducts.getProductsSuccess(products));
  } catch (error) {
    yield put(studentActions.getProducts.getProductsFailure(error));
  }
}
