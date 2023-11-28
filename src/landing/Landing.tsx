import React from "react";
import classes from "./Landing.module.css";
import Image from "./Image";
import Introduction from "./Introduction"

function Landing() {
   return <div className={classes.div}>
        <Introduction />
        <Image />
   </div>
}

export default Landing;