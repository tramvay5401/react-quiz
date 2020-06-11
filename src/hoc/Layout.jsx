import React from "react";
import classes from './Layout.module.scss'

class Layout extends React.Component{
    render() {
        return(
            <div className={classes}>
                <main>{this.props.children}</main>
            </div>
        )
    }
}

export default Layout