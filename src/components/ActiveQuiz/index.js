import React from "react";
import classes from './index.module.scss'
import AnswerList from "../AnswersList/index.";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <div className={classes.flex}>
            <span>
                <strong> {props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <span>
                {props.answerNumber} vs {props.quizLength}
            </span>
        </div>
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
      />
    </div>
)
export default ActiveQuiz