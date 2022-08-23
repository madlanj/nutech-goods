import Utils from "../utils"

const auth = {

    auth: {
        loading:true,
        message: null,
        isAuthenticated:false,
        token: Utils.getToken("get")
    }
}

export const initialState = {
    ...auth
}