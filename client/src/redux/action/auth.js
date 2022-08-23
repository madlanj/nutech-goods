import { SIGN_IN } from "../constants";

export const PostLogin = (formdata)=> ({
    type: SIGN_IN,
    formdata
})


export const SignOut = ()=> ({
    type: "SIGN_OUT"
})