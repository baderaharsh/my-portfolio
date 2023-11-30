import classes from "./Introduction.module.css"
import { Tooltip } from "@mui/material";
import ExternalRef from "./ExternalRef";
import ActionButtons from "./ActionButtons";

export default function Introduction() {

    const engineer: string = "Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost. Before Software Developer, I am an Engineer"

    return <div className={classes.introDiv}>
        <p className={`${classes.mpa} ${classes.hello}`}>Hello, there!</p>
        <h1 className={`${classes.mpa} ${classes.name}`}>I'm <span style={{ color: "#0081B4" }}>Harsh Badera</span></h1>
        <h4 className={`${classes.mpa} ${classes.bio}`}>An <Tooltip title={engineer} arrow><span className={classes.tooltip}>ENGINEER</span></Tooltip>, and a Full Stack developer with 3 years of experience in designing, developing, and maintaining scalable & high performance applications</h4>
        <ExternalRef />
        <ActionButtons />
    </div>
}
