import classes from "./Skills.module.css";
import skillsJson from "../../constants/skills.json";
import Skill from "./Skill";

export default function Skills() {

    return <div className={classes.skills}>
        <div className={classes.header}><h1>Skills</h1></div>
        <div className={classes.skill}>
            {skillsJson.skills.map((skill) => <Skill key={skill.label} skill={skill} />)}
        </div>
    </div>
}