import { TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import Organization from "../../../interfaces/Organization";
import classes from "./ExperienceItem.module.css";
import ExperienceContent from "./ExperienceContent";

interface Props {
    exp: Organization;
}

export default function ExperienceItem(props: Props) {
    let to = props.exp.to != null ? props.exp.to : "Present";
    return <TimelineItem id={`${props.exp.id}`}>
                <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="white"> <h2>{props.exp.from}-{to}</h2>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                        <img className={classes.logo} src={props.exp.logoUrl} alt="logo" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <ExperienceContent org={props.exp}/>
                </TimelineContent>
            </TimelineItem>
}