import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

import { GET_POSTS, GET_POST_DETAILS } from "./actionTypes";

import {
  getPostsSuccess,
  getPostsFail,
  getPostDetailsSuccess,
  getPostDetailsFail,
} from "./actions";

import { PostService } from '../../services/posts.service';

function* onGetPosts() {
  console.log('onGetPosts');
  try {
    const response = yield call(PostService.getPosts);
    yield put(getPostsSuccess(response));
  } catch (error) {
    yield put(getPostsFail(error.response));
  }
}

function* onGetPostDetails({ payload: id }) {
  try {
    const response = yield call(PostService.getPostDetails, id);
    yield put(getPostDetailsSuccess(response));
  } catch (error) {
    yield put(getPostDetailsFail(error.response));
  }
}

function* CartSaga() {
  console.log('watch saga');
  yield takeLatest(GET_POSTS, onGetPosts);
  yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default CartSaga;
