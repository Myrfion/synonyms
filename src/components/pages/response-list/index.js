import React,{Component} from 'react';
import {connect} from 'react-redux';

import ResponseItem from '../response-item';

import {addItem} from '../../../actions';

import './response-list.css';

class ResponseList extends Component{
    clickHandler = (e) => {
        this.props.addItem(e.target.innerHTML);
    }
    render = () => {
        const {list,loading} = this.props;
        const {clickHandler} = this;
        if(!loading){
            return(
                <ul className="list-group resp-list">
                    {
                        list.map((value)=>{
                            return(
                                //<ResponseItem value={value} />
                                <li className="list-group-item" onClick={clickHandler}>{value}</li>
                            )
                        })
                    }
                </ul>
            )
        }else{
            return <p>Loading</p>
        }
        
    }
}


const mapStateToProps = ({list,loading}) => {
    return{
        list,
        loading
    }
}

export default connect(mapStateToProps,{addItem})(ResponseList);

 