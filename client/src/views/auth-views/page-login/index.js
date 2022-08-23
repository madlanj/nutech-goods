import React, { useState } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Navbar from 'components/Navbar';
// import { Login as processLogin } from '../service/Auth';
import ApiService from '../../../service/api.service';
import Utils from '../../../utils';
import { useHistory } from 'react-router-dom';
import {PostLogin} from '../../../redux/action/auth'

const Login = (props) => {
    let { PostLogin } = props
    const [msg, setMsg] = useState('');
    const history = useHistory ();
 
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
            PostLogin(formdata);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.message);
            }
        }
    }

    const regist = () => {
        history.push('/auth/register')
    }



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

Login.propTypes = {
    PostLogin: PropTypes.func.isRequired
}
Login.defaultProps ={}
 
export default connect(()=> {
    return {}
},{PostLogin})(React.memo(Login))