import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
     hrefHandler = (e) => {
        console.log(e);
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <a className="navbar-brand" href="#">Моя аппка</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link" activeClassName="active">Главная</Link>
                            <Link to="/search" className="nav-item nav-link" activeClassName="active">Поиск</Link>
                            <Link to="/words" className="nav-item nav-link" activeClassName="active">Мои слова</Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;