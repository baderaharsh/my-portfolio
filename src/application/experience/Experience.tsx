import classes from "./Experience.module.css";
import ExperienceItem from "./timeline/ExperienceItem";

import json from "../../constants/fullTimeExperience.json"
import { Timeline } from "@mui/lab";

export default function Experience() {

    return <div className={classes.experience}>
        <div className={classes.experienceCard}>
            <h1>Experience goes here</h1>
            <Timeline position="alternate">
                {json.organizations.map(org => <ExperienceItem exp={org} />)}
            </Timeline>
        </div>
    </div>
}