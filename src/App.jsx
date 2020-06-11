import React from 'react';
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";
import './App.css'

class App extends React.Component{
    render() {
        // const divStyles = {
        //     border:'1px solid black',
        //     width:400,
        // }
        return (
            <Layout>
                <Quiz/>
            </Layout>
        );
    }
}

export default App;
