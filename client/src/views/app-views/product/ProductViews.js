import React, {lazy, Suspense} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PrivateRoute from "../../permissions/PrivateRoute";


const ProductViews = (props)=> {
    let { match } = props
    console.log({props},"PRODUCT VIEWS")
    return(
        <Switch>
        <PrivateRoute path={`${match.url}/default`} component={lazy(()=> import('./product-list/index'))}/>
        <PrivateRoute path={`${match.url}/add`} component={lazy(()=> import('./product-add/index'))}/>
        <PrivateRoute path={`${match.url}/update/:id`} component={lazy(()=> import('./product-update/index'))}/>
        <PrivateRoute path={`${match.url}/:id`} component={lazy(()=> import('./product-single/index'))}/>
        <Redirect from={`${match.url}/`} to={`${match.url}/default`}/>
    </Switch>
    )
}

export default React.memo(ProductViews)