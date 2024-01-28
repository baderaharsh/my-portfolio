import classes from "./OverviewImage.module.css";
import { Button } from "@mui/material";

interface Props {
    organization: {
        name: string,
        logoUrl: string,
        id: string

    }
}

export default function OverviewImage(props: Props) {

    return <div className={classes.overviewImgDiv}>
        <img className={classes.logo} src={props.organization.logoUrl} alt={props.organization.name} />
        <Button className={classes.btn} href={`#${props.organization.id}`} variant="contained">Details</Button>
    </div>
}