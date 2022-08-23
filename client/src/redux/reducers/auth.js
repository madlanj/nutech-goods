import mutate from "../mutations";
import { SIGN_IN,SIGN_IN_SUCCESS,SIGN_IN_ERROR } from '../constants/index'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = mutate.auth.initialState, action){
    let { type } = action
    switch(type){
        case SIGN_IN:
            return mutate.auth.login.post(state,action)
        case SIGN_IN_SUCCESS:
            return mutate.auth.login.success(state,action)
        case SIGN_IN_ERROR:
            return mutate.auth.login.error(state,action)
        case "SIGN_OUT":
            return mutate.auth.logout(state,action)
        default:
            return state
    }
}