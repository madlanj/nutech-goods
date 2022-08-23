import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import ApiService from '../../service/api.service';
import Utils from '../../utils';
import { SIGN_IN, SIGN_IN_ERROR, SIGN_IN_SUCCESS } from '../constants';

export function* LoadUser() {
    yield takeEvery(SIGN_IN, function* ({formdata}) {
        try{
            const response = yield call(()=> {
                return new Promise((resolve)=> {
                    resolve(new ApiService({
                        url:"/api/v1/auth/signin",
                        body:formdata,
                        config:{
                            headers: {
                                "Content-Type":"application/x-www-form-urlencoded",
                                "Authorization": `Bearer ${Utils.getToken('get')}`
                            }
                        }
                    }).post())})
            })

            if(!response?.error){
                yield put ({
                    type:SIGN_IN_SUCCESS,
                    ...response
                })
            }else{
                yield put ({
                    type: SIGN_IN_ERROR,
                    message: response?.message ?? null
                })
            }

        }catch(err){
            yield put ({
                type: SIGN_IN_ERROR,
                message: err?.message ?? null
            })
        }
    })
}

export default function* rootSaga() {
    yield all([
        fork(LoadUser)
    ])
}