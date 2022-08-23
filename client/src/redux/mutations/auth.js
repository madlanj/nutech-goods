import Utils from "../../utils"

const auth = {
    initialState:{
        loading: false,
        message: null,
        token: Utils.getToken('get'),
        isAuthenticated: Utils.getToken('get') ? true :false,
    },
    logout: (state,action)=> {
        Utils.getToken("remove")
        return {
            ...state,
            token: null,
            isAuthenticated:false,
        }
    },
    login: {
        post: (state,action)=> {
            return {
                ...state,
                loading:true,
                message: null,
            }
        },
        success: (state,action)=> {
            Utils.getToken('set',action?.data)
            return {
                ...state,
                loading:false,
                message: action?.message ?? null,
                token: action?.data ?? null,
                isAuthenticated: true,
            }
        },
        error: (state,action)=> {
            return {
                ...state,
                loading:false,
                message: action?.message ?? null,
                token: null,
                isAuthenticated:false
            }
        }
    }
}

export default auth