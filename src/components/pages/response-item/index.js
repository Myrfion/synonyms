import React,{Component} from 'react';

import {connect} from 'react-redux';

import {addItem} from '../../../actions';

class ResponseItem extends Component{
    clickHandler = () =>{
        //this.props.addItem(this.props.value);
    }
    render(){
        const {value} = this.props;
        const {clickHandler} = this;
        return(
            <li className="list-group-item" onClick={clickHandler}>{value}</li>
        )
    }
}

//export default connect({},{addItem})(ResponseItem);

export default ResponseItem;