import classes from "./Landing.module.css";
import Image from "./image/Image";
import Introduction from "./introduction/Introduction"

export default function Landing() {
   return <div className={classes.landing}>
        <Introduction />
        <Image />
   </div>
}