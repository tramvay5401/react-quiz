import React from "react";
import classes from './index.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz";
import FishedItem from "../../components/FishedItem";

class Quiz extends React.Component {
    state = {
        results: {},
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        quiz: [
            {
                question: 'Who is you?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Question 1', id: 1},
                    {text: 'Question 2', id: 2},
                    {text: 'Question 1', id: 3},
                    {text: 'Question 1', id: 4},
                ]
            },
            {
                question: 'Who is you1?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'Question 1', id: 1},
                    {text: 'Question 1', id: 2},
                    {text: 'Question 2', id: 3},
                    {text: 'Question 1', id: 4},
                ]
            }
        ]
    }
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({answerState: {[answerId]: 'success'}, results: results})
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({isFinished: true})
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            this.setState({answerState: {[answerId]: 'error'}, results: results})
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>ASK this questions</h1>
                    {
                        this.state.isFinished
                            ? <FishedItem
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            />
                            : <ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz
