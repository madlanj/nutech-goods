import React,{Suspense,lazy} from 'react'
import { Switch,Route, Redirect} from 'react-router-dom'
import AuthRoute from '../../permissions/AuthRoute'

const AuthViews = ({match})=> {
    console.log(match)
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path={`${match.url}/login`} component={lazy(()=> import("./page-login/index"))}/>
                <Route path={`${match.url}/register`} component={lazy(()=> import("./page-register/index"))}/>
                <Redirect from={`${match.url}/`} to={`${match.url}/login`}/>
            </Switch>
        </Suspense>
    )
}

export default AuthViews