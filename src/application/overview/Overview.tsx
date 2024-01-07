import classes from "./Overview.module.css";
import json from "../../constants/fullTimeExperience.json";
import OverviewImage from "./OverviewImage";

export default function Overview() {

    return <div className={classes.overview}>
        <div className={classes.overviewCard}>
            <h2>Experience</h2>
            <div className={classes.organizations}>
                {json.organizations.map(org => <OverviewImage key={org.id} organization={org} />)}
            </div>
        </div>
    </div>
}