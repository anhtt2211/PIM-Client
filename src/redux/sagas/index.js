import { all } from '@redux-saga/core/effects';
import { productSaga } from './products';

export default function* mySaga() {
  //column transcript
  yield all([productSaga()]);
}
