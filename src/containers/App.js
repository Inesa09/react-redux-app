import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
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
        const {burgers, searchField} = this.state;
        const filteredBurgers = burgers.filter(burger => burger.name.toLowerCase().includes(searchField.toLowerCase()));
        return (!burgers.length) ?
            <h1 className="tc"> Loading </h1> :
            (
                <div className="tc">
                    <Scroll>
                        <h1 className="ma0 pa4"> Our  Burgers </h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                    </Scroll>
                    <CardList burgers = {filteredBurgers}/>
                </div>
            )
    }   
}

export default App;

// json-server --watch db.json --port 3004