import {takeEvery} from 'redux-saga/effects';
import { EcomAction } from '../constants/actionconstants';
import GetBestSellingPhone from '../sagas/bestsellingphonesaga';

export default function* RootSaga(){
    yield takeEvery(EcomAction.GET_BEST_SELLINGS_PHONE,GetBestSellingPhone);
}