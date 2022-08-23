export default class Utils  {
    static getThumbnail(pathname){
        return [window.origin.replace(/:3001/g,':3000'),pathname].join("/")
    }
    static getToken(type = 'get',token = null) {
        try {
            switch (type) {
                case "get":
                    if (localStorage.getItem("token")) {
                        return localStorage.getItem("token")
                    }
                    return null
                    case "set":
                        localStorage.setItem("token",token)
                        break;
                case "remove":
                    if (localStorage.getItem("token")) {
                        localStorage.removeItem('token')
                        return true
                    }
                    return true
                default:
                    if (localStorage.getItem("token")) {
                        return localStorage.getItem("token")
                    }
                    return null


            }


        } catch (err) {
            return null
        }

    }
}