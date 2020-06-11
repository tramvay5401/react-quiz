import React from "react";
import classes from './index.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        quiz:[
            {
                answers:[
                    {text:'Question 1'},
                    {text:'Question 1'},
                    {text:'Question 1'},
                    {text:'Question 1'},
                ]
            }
        ]
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz
