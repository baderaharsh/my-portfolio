import React from "react";
import classes from "./Image.module.css"

function Image() {
    return <div className={classes.divForImg}>
        <div className={classes.innerDivForImage}>
            <img src="/harsh.png" alt="me" className={classes.img} />
            <h1 className={classes.name}>HARSH</h1>
        </div>
    </div>
}

export default Image;