// import { takeEvery, put, call } from 'redux-saga/effects';

// import * as actionCreator from './actions';
// import { fetchData } from './api';

// function* display_hello(){
//     try{
//         const data = yield call(fetchData);
//         yield put(actionCreator.res_hello(data))
//     }catch(e){
//         console.log(e)
//         yield put(actionCreator.res_hello('error check the console'))
//     }
// }   

// export default function* mySaga(){
//     yield takeEvery(actionCreator.REQ_HELLO, display_hello);
// }