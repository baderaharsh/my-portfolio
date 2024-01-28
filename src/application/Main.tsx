import React, { Fragment } from "react";
import Landing from "./landing/Landing";
import Overview from "./overview/Overview";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";

function Main() {
    return <Fragment>
        {/* <Navigator /> */}
        <Landing />
        <Overview />
        <Skills />
        <Experience />
    </Fragment>
}

export default Main;