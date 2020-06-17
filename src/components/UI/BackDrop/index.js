import React from "react";
import classes from './index.module.scss'

const Backdrop = props=> <div className={classes.Backdrop} onClick={props.onClick} />
export default Backdrop