import React from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";


const PrivateRoute = ({component: Component, isAuthenticated, token,loading,...rest})=> {

    console.log({isAuthenticated,token,loading});

    return (
        <Route
            {...rest}
            history={createBrowserHistory}
            render={(props)=> {
                return !loading ?
                    !isAuthenticated ? (
                        <Component {...props}/>
                    ):(
                        <Redirect  to={{
                            pathname: "/"}}/>
                    ):"Loading..."
            }}

        />
    )
}

const mapStateToProps =({auth})=> {
    let {isAuthenticated,loading,token}= auth
    return {isAuthenticated,loading,token}
}

export default connect(mapStateToProps,{})(React.memo(PrivateRoute))
