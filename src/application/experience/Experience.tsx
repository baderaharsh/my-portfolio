import classes from "./Experience.module.css";
import ExperienceItem from "./timeline/ExperienceItem";

import json from "../../constants/fullTimeExperience.json"
import { Timeline } from "@mui/lab";
import ExperienceContent from "./timeline/ExperienceContent";

export default function Experience() {

    json.organizations.sort((org1, org2) => Date.parse(org2.from) - Date.parse(org1.from));
    let windowWidth: number = window.outerWidth;

    return <div className={classes.experience}>
        <div className={classes.experienceInnerDiv}>
            <div className={classes.heading}><h2>Experience</h2><div className={classes.headingBorder}></div></div>
            {windowWidth > 980 ? <div className={classes.timeline}>
                <Timeline sx={{ maxWidth: "1480px" }} position="alternate">
                    {json.organizations.map(org => <ExperienceItem key={org.id} exp={org} screenWidth={windowWidth} />)}
                </Timeline>
            </div>
                :
                <div className={classes.mExperienceDiv}>
                     {json.organizations.map(org => <ExperienceContent key={org.id} org={org} screenWidth={windowWidth} />)}
                </div>}
        </div>
    </div>
}