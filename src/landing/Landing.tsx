import classes from "./Landing.module.css";
import Image from "./Image";
import Introduction from "./Introduction"

export default function Landing() {
   return <div className={classes.div}>
        <Introduction />
        <Image />
   </div>
}