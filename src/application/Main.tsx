import React, { Fragment } from "react";
import Landing from "./landing/Landing";
import Overview from "./overview/Overview";
import Skills from "./skills/Skills";


function Main() {
    return <Fragment>
        {/* <Navigator /> */}
        <Landing />
        <Overview />
        <Skills />
        {/* <Footer /> */}
    </Fragment>
}

export default Main;