import classes from "./ActionButtons.module.css"
import ContactButton from "./IntroButtons/ContactButton";
import CvButton from "./IntroButtons/CvButton";

export default function ActionButtons() {

    return <div className={classes.actionButtons}>
        <ContactButton />
        <CvButton />
    </div>
}