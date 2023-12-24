import classes from "./Overview.module.css";
import OverviewImage from "./OverviewImage";
import { Quantiphi, Rain, IBM } from "../../constants/Organization"

export default function Overview() {

    return <div className={classes.overview}>
        <div className={classes.overviewCard}>
            <h2>Experience</h2>
            <div className={classes.innerOverview}>
                <OverviewImage organization={Quantiphi} />
                <OverviewImage organization={Rain} />
                <OverviewImage organization={IBM} />
            </div>
        </div>
    </div>
}