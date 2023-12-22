import React, { Fragment } from "react";
import Landing from "./landing/Landing";
import Overview from "./overview/Overview";


function Main() {
    return <Fragment>
        {/* <Navigator /> */}
        <Landing />
        <Overview />
        {/* <Footer /> */}
    </Fragment>
}

export default Main;