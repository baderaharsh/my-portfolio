 import { Fragment } from "react";
import Organization from "../../../interfaces/Organization";
import classes from "./ExperienceContent.module.css"
import Project from "./Project";

interface Props {
    org: Organization;
}

export default function ExperienceContent(props: Props) {

    let org = props.org;

    return <div className={classes.experienceCard}>
        <h3>{org.name}</h3>
        <h4 className={classes.designation}>{org.designation}</h4>
        {org.projects != null && org.projects.length > 0 ? 
        <Fragment>
            <h4>Projects</h4>
            {org.projects.map(project => <Project key={project.projectName} name={project.projectName} client={project.client} overview={project.overview} />)}
        </Fragment>
        : null}
    </div>
}
