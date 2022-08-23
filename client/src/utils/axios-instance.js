import axios from 'axios'
import Utils from "."; // function Logout in redux action

const ROOT_API = window.origin
// .replace(/:300(0|1|2|3|4|5)/g,":3000"); // window.origin https://heroku

let TOKEN = null;
if (localStorage.getItem("token")) {
    try {
        let NewToken = localStorage.getItem('token')
        if (typeof (NewToken) !== "undefined") {
            TOKEN = NewToken
        }
    } catch (err) {
        TOKEN = ""
    }
}

let headers = {
    "Authorization": Utils.getToken() ?? TOKEN
}


const AxiosInstance = axios.create({
    baseURL: ROOT_API,
    headers: {
        ...headers,
    }
})

AxiosInstance.isCancel = axios.isCancel;

AxiosInstance.interceptors.response.use(
    (res) =>
        new Promise((resolve, reject) => {
            if (res.data.error === 'Unauthorized') {
                console.log('gues')
            } else {
                resolve(res)
            }
        }),

    (err) => {
        if (!err.response) {
            return new Promise((resolve, reject) => {
                reject(err)
            })
        }
        if (err.response.status === 401) {
            return new Promise((resolve, reject) => {
                reject(err)
            })
            // store.dispatch(signOut())
        } else {
            return new Promise((resolve, reject) => {
                reject(err)
            })
        }
    }
)

export default AxiosInstance;
