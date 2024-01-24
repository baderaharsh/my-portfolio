import classes from "./Experience.module.css";
import ExperienceItem from "./timeline/ExperienceItem";

import json from "../../constants/fullTimeExperience.json"
import { Timeline } from "@mui/lab";

export default function Experience() {

    json.organizations.sort((org1, org2) => Date.parse(org2.from) - Date.parse(org1.from));

    return <div className={classes.experience}>
        <div className={classes.experienceInnerDiv}>
            <h1>Experience</h1>
            <div className={classes.timeline}>
                <Timeline position="alternate" sx={{ maxWidth: "1480px" }}>
                    {json.organizations.map(org => <ExperienceItem key={org.id} exp={org} />)}
                </Timeline>
            </div>
        </div>
    </div>
}