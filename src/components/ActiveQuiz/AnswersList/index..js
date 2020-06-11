import React from "react";
import classes from './index.module.scss'
import AnswerItem from "./AnswerItem";

const AnswerList = props =>(
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index)=>{
            return(
                <AnswerItem
                    key={index}
                    answer={answer}
                />
            )
        })}
    </ul>
)

export default AnswerList
