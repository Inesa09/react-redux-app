import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {burgers} from './burgers'
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            burgers: burgers,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render(){
        const filteredBurgers = this.state.burgers.filter(burger => {
            return burger.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className="tc"> 
                <h1 className="ma0 pa4"> Our  Burgers </h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList burgers = {filteredBurgers}/> 
            </div>
        )
    }   
}

export default App;