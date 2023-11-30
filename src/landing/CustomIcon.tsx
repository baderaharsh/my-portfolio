import React from "react";
import classes from "./CustomIcon.module.css"
import { Tooltip } from "@mui/material";

interface Props {
    externalUrl: string;
    hint: string;
    children: React.ReactNode;
}

export default function CustomIcon(props: Props) {
    return <Tooltip title={props.hint}>
        <a href={props.externalUrl} className={classes.icon} target="_blank" rel="noreferrer" >{props.children}</a>
    </Tooltip>
}