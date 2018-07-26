import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            burgers: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch('http://localhost:3004/burgers')
        .then(response => response.json())
        .then(response => this.setState({burgers: response}));
    }

    render(){
        const filteredBurgers = this.state.burgers.filter(burger => {
            return burger.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        if (this.state.burgers.length === 0)
            return <h1 className="tc"> Loading </h1>
        else
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

// json-server --watch db.json --port 3004