import React,{Component} from 'react';

import {fetchPostsWithRedux} from '../../../actions';
import store from '../../../store';

class SearchForm extends Component{
    state = {
        text: ""
    };
    changeHandler =(e)=>{
        this.setState({text:e.target.value});
    }
    clickHandler = () => {
        fetchPostsWithRedux(this.state.text);
    }
    render(){
        //const {fetchPostsWithRedux} = this.props;
        const {changeHandler,clickHandler} = this;
        return(
            <div className="input-group col-md-4" style={{marginTop: 15,marginBottom: 15, padding: 0}}>
                <input className="form-control py-2" type="search" placeholder="search" id="example-search-input" onChange={changeHandler}/>
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={clickHandler}>
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        )
    }
}



export default SearchForm;