import React, {Component} from 'react'
import classes from './index.module.scss'
import {NavLink} from 'react-router-dom'
import axios from '../../axios/axios'
import Spinner from "../../components/UI/Spinner";
export default class QuizList extends Component {

    state={
        quizes:[],
        loading:true,
    }

    renderQuizes() {
        return this.state.quizes.map((quiz) => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const res =   await axios.get('/quizes.json')
            const quizes = []
            Object.keys(res.data).forEach((key, idx)=>{
                    quizes.push({
                        id:key,
                        name: `TEST # ${idx +1}`
                    })
            })
            this.setState({
                quizes, loading:false
            })
        }catch (e) {
            console.log(e)
        }

    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.state.loading
                        ?<Spinner/>
                        :<ul>
                            { this.renderQuizes() }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}