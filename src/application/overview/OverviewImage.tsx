import classes from "./OverviewImage.module.css";
import { Organization } from "../../constants/Organization";
import { Button } from "@mui/material";

interface Props {
    organization: Organization
}

export default function OverviewImage(props: Props) {

    return <div className={classes.overviewImgDiv}>
        <img className={classes.logo} src={props.organization.imagePath} alt={props.organization.alt} />
        <Button className={classes.btn} variant="contained">Details</Button>
    </div>
}