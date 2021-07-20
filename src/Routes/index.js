import React, {lazy, Suspense, useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Create from "../components/Create";
import Page from "../Pages/Page";
import NotFound from '../components/NotFound'
import DetailPage from '../Pages/DetailPage'
import Basket from '../Pages/Basket'

export default function Router() {
    const [show, setShow] = useState(true);

    const AsyncShopPage = lazy(() => import('../Pages/Shop' /*webpackChunkName : "shop-page"*/),
    );
    return (
        <>
            <Suspense
                fallback={
                    <div>
                        <p>Loading...</p>
                    </div>
                }
            >
                <Switch>

                    <Route exact path="/" render={() => <Page show={show} setShow={setShow}/>}/>
                    <Route path="/admin" component={Create}/>
                    <Route path="/shop" component={AsyncShopPage}/>
                    <Route path="/detail" component={DetailPage}/>
                    <Route path="/basket" component={Basket}/>
                    <Route component={NotFound}/>
                </Switch>
            </Suspense>
        </>
    );
}
