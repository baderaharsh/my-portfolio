import classes from "./Skills.module.css";
import skillsJson from "../../constants/skills.json";
import Skill from "./Skill";

export default function Skills() {

    return <div className={classes.skills}>
        <div className={classes.header}><h2>Skills</h2></div>
        <div className={classes.vl} />
        <div className={classes.skill}>
            {skillsJson.skills.map((skill) => <Skill key={skill.label} skill={skill} />)}
        </div>
    </div>
}