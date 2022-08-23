import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import Navbar from './Navbar';
import { Login as processLogin } from '../service/Auth';
import ApiService from '../service/api.service';
import Utils from '../utils';


const Login = (props) => {
    const [msg, setMsg] = useState('');
    const history = useNavigate ();
 
    const [formData,setFormData] = useState({
        username:"",
        password:""
    })
    const handleChange = (e)=> {setFormData({...formData,[e.target.name]: e.target.value})}
    const Auth = async (e) => {
        e.preventDefault();
        try {
            const formdata = new URLSearchParams()
            Object.keys(formData).map((key)=> {
                formdata.append(key,formData[key])
            })
            await new ApiService({
                url:"/api/v1/auth/signin",
                body:formdata,
                config:{
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded",
                        "Authorization": `Bearer ${Utils.getToken('get')}`
                    }
                }
            }).post()
            .then((response)=> {
                if(!response?.error){
                    Utils.getToken('set',response?.data)
                }
                console.log(response)
            })
            .catch((err)=> {
                console.log(err)
            })

            // const headers = {
            //     'Content-Type': 'application/json'
            // };
            // await axios.post('http://localhost:3000/api/v1/auth/signin', {
            //     username: username,
            //     password: password
            // },
            // {headers}
            // );
            history.push("/dashboard");

        } catch (error) {
            if (error.response) {
                setMsg(error.response.message);
            }
        }
    }

    const regist = () => {
        console.log("regisssss ")
    }

    const login = () => {
        console.log("loginnnnn ")
    }


    console.log(formData)
    return (
        <div>
            <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                        
                            <div className="box">
                            <form onSubmit={Auth}>    
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label">Username</label>
                                    <div className="controls">
                                        <input
                                        name="username"
                                        onChange={handleChange}
                                        type="text"
                                        className="input"
                                        placeholder="Username"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input
                                            onChange={handleChange}
                                            name="password"
                                         type="password"
                                         className="input"
                                         placeholder="******"
                                        />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    
                                        <button  className="button is-success is-fullwidth">Login</button>
                                    
                                    <button onClick={regist} className="mt-1 button is-info is-fullwidth">Register</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}
 
export default Login