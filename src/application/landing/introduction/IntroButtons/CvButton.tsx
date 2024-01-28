import { Button } from "@mui/material";
import classes from "./CvButton.module.css"
import btnClasses from "./ActionButtons.module.css"

export default function CvButton() {

    return <div className={classes.cvButton}>
        <Button className={btnClasses.actionButtons} variant="outlined" href={process.env.REACT_APP_CV_URL!} target="_blank">Download CV</Button>
    </div>
}