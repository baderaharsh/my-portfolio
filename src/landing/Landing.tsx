import React from "react";
import classes from "./Landing.module.css";

function Landing() {
    return <div className={classes.divForImg}>
        <div className={classes.innerDivForImage}>
            <img src="/harsh.png" alt="me" className={classes.img} />
            <h1 className="">HARSH</h1>
        </div>
    </div>
}

export default Landing;