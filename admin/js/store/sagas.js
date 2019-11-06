/* eslint-disable camelcase */
/* eslint camelcase: 1 */
import { call, put, select, takeEvery, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { push } from 'connected-react-router';

import * as api from '../api';
import * as actions from '../store/actions';

function* initialization (action) {
  const state = yield select();
  const res = yield call(api.initialization);

  yield put({
    type: actions.SAGAS_INITIALIZATION,
  });
}

function* getPosts (action) {
  const state = yield select();
  const res = yield call(api.getPosts);

  yield put({
    type: actions.SAGAS_GET_POSTS,
    posts: res,
  });
}

function* rootSaga () {
  yield takeEvery(actions.INITIALIZATION, initialization);
  yield takeEvery(actions.GET_POSTS, getPosts);
}

export default rootSaga;
