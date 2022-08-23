import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import Utils from '../utils';
import { connect } from 'react-redux';
import { SignOut } from '../redux/action/auth';
 
const Navbar = (props) => {
    const history = useHistory()
    let { SignOut } = props

    const home = () => {
        history.push('/');
    }
    const Logout = async () => {
        SignOut()
        Utils.getToken('remove')
    }
 
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                
 
                   
                </div>
 
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a onClick={home} className="navbar-item">
                            Home
                        </a>
                    </div>
 
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={Logout} className="button is-light">
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
 Navbar.propTypes = {
    SignOut: PropTypes.func.isRequired
 }
 Navbar.defaultProps = {}
export default connect(()=> {
    return {}
},{SignOut})(Navbar)