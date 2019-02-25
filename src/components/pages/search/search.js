import React, {Component} from 'react';

import SearchForm from '../search-form';
import ResponseList from '../response-list'



class SearchContainer extends Component{
    render(){
        return(
            <div>
                <SearchForm />
                <ResponseList />
            </div>
        );

    }
}


export default SearchContainer