import { put, takeEvery, all } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native'
import { getToken } from '../helper';
import * as apiHelper from '../apiHelper'
function* postLoguser() {
	const token = getToken()
	AsyncStorage.setItem('AccessToken', token.accessToken);
	yield put({ type: 'LOGIN_USER_SUCCESS', login_response: token.accessToken })
	return token
}
function* postDatas(data) {
	const posts = apiHelper.getRequest(`r/${data}.json`)
	yield put({ type: 'POSTS_SUCCESS', posts_response: posts })
	return token
}

function* actionWatcher() {
	yield takeEvery('LOGIN_REQUEST', postLoguser);
	yield takeEvery('POSTS_REQUEST', postDatas);

}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}