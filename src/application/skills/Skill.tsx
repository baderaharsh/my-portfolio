import classes from "./Skill.module.css";

interface SkillParm {
    skill: {
        label: string,
        imageUrl: string
    }
}

export default function Skill(props: SkillParm) {

    return <div className={classes.skill}>
        <div className={classes.logo}><img src={props.skill.imageUrl} alt={props.skill.label} /></div>
        <h3>{props.skill.label}</h3>
    </div>
}