 import { Fragment } from "react";
import Organization from "../../../interfaces/Organization";
import classes from "./ExperienceContent.module.css"
import Project from "./Project";

interface Props {
    org: Organization,
    screenWidth: number;
}

export default function ExperienceContent(props: Props) {

    let org = props.org;
    let to = org.isPresent ? "Present" : org.to;

    return <div id={`${org.id}`} className={classes.experienceCard}>
        {props.screenWidth < 980 ? <h4 className={classes.duration}>{org.from} - {to}</h4> : <span /> }
        <h3>{org.name}</h3>
        <h4 className={classes.designation}>{org.designation}</h4>
        {org.projects != null && org.projects.length > 0 ? 
        <Fragment>
            <h4 className={classes.projects}>Projects</h4>
            {org.projects.map(project => <Project key={project.projectName} name={project.projectName} client={project.client} overview={project.overview} />)}
        </Fragment>
        : null}
        <ul className={classes.responsibilities}>
            {org.responsibilities?.map(resposibility => <li key={resposibility} className={classes.responsibility}>{resposibility}</li>)}
        </ul>
    </div>
}
