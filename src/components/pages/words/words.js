import React,{Component} from 'react';

import {connect} from 'react-redux';

class WordsContainer extends Component{
    render(){
        const {list} = this.props;
        return(
            <ul className="list-group">
                {list.map((value,key)=>{
                    return(<li className="list-group-item">{value}</li>)
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        list: state.saved
    }
}

export default connect(mapStateToProps)(WordsContainer);