import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import MainContainer from '../pages/main';
import SearchContainer from '../pages/search';
import WordsContainer from '../pages/words';

class Main extends Component{
    render(){
        return(
            <div className="container" style={{padding: "0"}}>
                <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/search" component={SearchContainer} />
                    <Route path="/words" component={WordsContainer} />
                </Switch>
            </div> 
        )
    }
}

export default Main;