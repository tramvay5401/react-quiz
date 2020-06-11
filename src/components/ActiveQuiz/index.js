import React from "react";
import classes from './index.module.scss'
import AnswerList from "./AnswersList/index.";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <div className={classes.flex}>
            <span>
                <strong>2.</strong>
                Where are you?
            </span>
            <span>
                4 vs 12
            </span>
        </div>
      <AnswerList
        answers={props.answers}
      />
    </div>
)
export default ActiveQuiz