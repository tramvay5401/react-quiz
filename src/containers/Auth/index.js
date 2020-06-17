import React, {Component} from 'react'
import classes from './index.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input";

export default class Auth extends Component {

    state = {
        formControls:{
            email:{
                value:'',
                type:'email',
                label:'Email',
                errorMessage:'Введите правильный Email',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                value:'',
                type:'password',
                label:'Пароль',
                errorMessage:'Введите правильный пароль',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    minLength:6
                }
            }
        }
    }

    loginHandler = () => {

    }
    registerHandler = () => {

    }
    submitHandler = (event) => {
        event.preventDefault()
    }

    validateControl(value,validation){
        if(!validation){
            return true
        }

        let isValid = true

        return isValid
    }

    onChangeHandler =(event, controlName)=>{

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.valueOf = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({

        })
    }

    renderInputs(){
        return Object.keys(this.state.formControls).map((controlName, index)=>{
            const control = this.state.formControls[controlName]
            return(
                <Input
                    key={controlName + index}
                    type = {control.type}
                    value = {control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label = {control.label}
                    shouldValidate = {!!control.validation}
                    errorMessage = {control.errorMessage}
                    onChange={(event)=> this.onChangeHandler(event,controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация </h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        {this.renderInputs()}
                        <hr/>
                        <Button type="success" onClick={this.loginHandler}>Войти</Button>
                        <Button type="success" onClick={this.registerHandler}>ЗАрегестироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}