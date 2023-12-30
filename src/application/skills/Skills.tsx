import classes from "./Skills.module.css";
import skillsJson from "../../constants/skills.json";
import Skill from "./Skill";

export default function Skills() {

    return <div className={classes.skills}>
        <h1>Skills</h1>
        <div className={classes.skill}>
            {skillsJson.skills.map((skill) => <Skill skill={skill} />)}
        </div>
    </div>
}