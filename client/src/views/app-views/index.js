import React, {lazy, Suspense} from "react";
import {Switch, Redirect} from "react-router-dom";
import PrivateRoute from "../../permissions/PrivateRoute";


const AppViews = (props)=> {
    let { match } = props
    return(
        <Suspense fallback={'loading...'}>
            <Switch>
                <PrivateRoute path={`${match.url}/default`} component={lazy(()=> import('./product/product-list/index'))}/>
                <PrivateRoute path={`${match.url}/goods`} exact component={lazy(()=> import('./product/product-list/index'))}/>
                <PrivateRoute path={`${match.url}/goods/add`} exact component={lazy(()=> import('./product/product-add/index'))}/>
                <PrivateRoute path={`${match.url}/goods/update/:id`} component={lazy(()=> import('./product/product-update/index'))}/>
                <PrivateRoute path={`${match.url}/goods/:id`} component={lazy(()=> import('./product/product-single/index'))}/>
                <Redirect from={`${match.url}/`} to={`${match.url}/default`}/>
            </Switch>
        </Suspense>
    )
}

export default React.memo(AppViews)