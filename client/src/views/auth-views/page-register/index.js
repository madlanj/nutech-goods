import React, { useState } from 'react'
import axios from "axios";
import { useHistory  } from "react-router-dom";
import ApiService from '../../../service/api.service';
 
const Register = () => {
    const [errors,setErrors] = useState(false)
    const [msg, setMsg] = useState('');
    const history = useHistory();

    const [formData,setFormData] = useState({
        name:'',
        username: "",
        password: "",
        confirm_password:"",
    })
    const handleChange = (e)=> { 
        if(e.target.name === "confirm_password"){
            if(formData.password !== e.target.value){
                if(e.target.value.length > 0){
                    setErrors(true)
                    setMsg("Password Tidak Sama")
                }else{
                    setErrors(false)
                    setMsg("")
                }

            }else{
                setErrors(false)
                setFormData({...formData,[e.target.name]:e.target.value})                
            }
        }else{
            setFormData({...formData,[e.target.name]:e.target.value})
        }
    }
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            const formdata = new URLSearchParams()
            Reflect.deleteProperty(formData,"confirm_password")
            Object.keys(formData).map((key)=> {
                formdata.append(key,formData[key])
            })
            await new ApiService({
                url:"/api/v1/auth/signup",
                body:formdata
            })
            .post()
            .then((response)=> {
                if(!response?.error){
                    history.push('/auth/login')
                }
            })
            .catch((err)=> {

            })
            // await axios.post('http://localhost:3000/auth/signup', {
            //     name: name,
            //     username: username,
            //     password: password,
            //     // confPassword: confPassword
            // });
            // history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="box">
                                {errors && msg !== "" && (
                                <p className="has-text-centered">{msg}</p>
                                )}

                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input name="name" onChange={handleChange} type="text" className="input" placeholder="Name"
                                            />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Username</label>
                                    <div className="controls">
                                        <input name="username" onChange={handleChange} type="text" className="input" placeholder="Username"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input name="password" onChange={handleChange} type="password" className="input" placeholder="******" />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input name="confirm_password" onChange={handleChange} type="password" className="input" placeholder="******"/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register