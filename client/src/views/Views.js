import React,{Suspense,lazy} from 'react'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AuthRoute from '../permissions/AuthRoute';

const Views = (props)=> {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Switch>
                <Route path={'/app'} component={lazy(()=> import ("./app-views/index"))}/>
                <AuthRoute path={'/auth'} component={lazy(()=> import("./auth-views/index"))}/>
                <Route path='/'>
                    <Redirect to={'/app'}/>
                </Route>
            </Switch>
        </Suspense>
    )
}

export default withRouter(Views)