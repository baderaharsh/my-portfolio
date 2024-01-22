import { Fragment, useRef, useState } from "react";
import classes from "./Project.module.css";

interface Props {
    name?: string,
    client?: string,
    overview?: string
}

export default function Project(props: Props) {

    // let visibleOverview = ;

    const [visibleOverview, setVisibleOverview] = useState(props.overview?.slice(0, 50));
    const textButton = useRef("...read more");

    const handler = () => {
        if(textButton.current != null && textButton.current === "...read more") {
            setVisibleOverview(props.overview);
            textButton.current = "...read less";
        } else {
            setVisibleOverview(props.overview?.slice(0, 50));
            textButton.current = "...read more";
        }
    }

    return <Fragment>
        <h5>{getProjectBio(props.name, props.client)} </h5>
        {props.overview != null || props.overview !== undefined ? 
        <Fragment>
            <p className={classes.overview}>{visibleOverview} {props.overview.length > 50 ? <span className={classes.readMore} onClick={handler}>{textButton.current}</span> : null }</p> 
        </Fragment>
         : ""}
    </Fragment>
}

function getProjectBio(name: string | undefined, client: string | undefined) {
    let bio = "";
    if (name != null && name !== undefined) {
        bio = bio.concat(name);
    }
    if (client != null && client !== undefined) {
        bio = bio !== "" || bio.length !== 0 ? bio.concat(', ') : bio;
        bio = bio.concat(client);
    }
    return bio;
}