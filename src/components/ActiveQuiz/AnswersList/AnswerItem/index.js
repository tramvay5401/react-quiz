import React from "react";
import classes from './index.module.scss'

const AnswerItem = props=>{
    return(
        <li className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem