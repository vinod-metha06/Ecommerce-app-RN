import {put, call} from 'redux-saga/effects';
import { dispatchBestSellingPhoneLoaded, dispatchBestSellingPhoneLoadingError, dispatchBestSellingPhoneLoding } from '../redux/actions';
import getBestSellingPhonesAPI from '../service/bestsellingproducts';


export default function* GetBestSellingPhone(): any {
  yield put(dispatchBestSellingPhoneLoding());
  try {
    const response = yield getBestSellingPhonesAPI();
    console.log(response.data)
    yield put(dispatchBestSellingPhoneLoaded(response));
    console.log("donee")
  } catch (error) {
    console.log("Error")
    yield put(dispatchBestSellingPhoneLoadingError());
  }
}