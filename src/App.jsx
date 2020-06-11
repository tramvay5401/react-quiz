import React from 'react';
import './App.module.scss';
import Layout from "./hoc/Layout";

class App extends React.Component{
    render() {
        const divStyles = {
            border:'1px solid black',
            width:400,
        }
        return (
            <Layout>
                <div style={divStyles}>
                    <h1>Layout</h1>
                </div>
            </Layout>
        );
    }
}

export default App;
