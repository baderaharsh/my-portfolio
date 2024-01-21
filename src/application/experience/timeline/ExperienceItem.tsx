import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import Organization from "../../../interfaces/Organization";

interface Experience {
    exp: Organization;
}

export default function ExperienceItem(props: Experience) {
    return <TimelineItem>
                <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="white"> <h2>{props.exp.from}</h2>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    {/* <TimelineDot> */}
                        <img src={props.exp.logoUrl} alt="logo" />
                    {/* </TimelineDot> */}
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{props.exp.name}</TimelineContent>
            </TimelineItem>
}