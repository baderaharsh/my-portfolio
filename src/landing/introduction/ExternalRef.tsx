import { LinkedIn, Instagram, GitHub, HdrWeakOutlined, Email } from "@mui/icons-material";
import classes from "./ExternalRef.module.css"
import { ExternalUrls } from "../../constants/ExternalUrls";
import CustomIcon from "./CustomIcon";

export default function ExternalRef() {
    return <div className={classes.ext}>
        <CustomIcon externalUrl={ExternalUrls.GitHub} hint="GitHub"><GitHub fontSize="large" /></CustomIcon>
        <CustomIcon externalUrl={ExternalUrls.LinkedIn} hint="LinkedIn"><LinkedIn fontSize="large" /></CustomIcon>
        <CustomIcon externalUrl={ExternalUrls.Medium} hint="Medium"><HdrWeakOutlined fontSize="large" /></CustomIcon>
        <CustomIcon externalUrl={ExternalUrls.Instagram} hint="Instagram"><Instagram fontSize="large" /></CustomIcon>
        <CustomIcon externalUrl={ExternalUrls.Email} hint="Email"><Email fontSize="large" /></CustomIcon>
    </div>
}