import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

import { setSearchField, requestBurgers } from '../actions';

const mapStateToProps = state => ({
    searchField: state.searchBurgers.searchField, //state.searchField - if 1 reducer
    burgers: state.requestBurgers.burgers,
    isPending: state.requestBurgers.isPending,
    error: state.requestBurgers.error,
})

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestBurgers: () => dispatch(requestBurgers())
})

class App extends Component {

    componentDidMount(){
        this.props.onRequestBurgers();
    }

    render(){
        const { searchField, burgers, isPending, onSearchChange } = this.props;
        const filteredBurgers = burgers.filter(burger => burger.name.toLowerCase().includes(searchField.toLowerCase()));

        return (isPending) ?
            <h1 className="tc"> Loading </h1> :
            (
                <div className="tc">
                    <Scroll>
                        <h1 className="ma0 pa4"> Our  Burgers </h1>
                        <SearchBox searchChange = {onSearchChange}/>
                    </Scroll>
                    <ErrorBoundary>
                        <CardList burgers = {filteredBurgers}/>
                    </ErrorBoundary>
                </div>
            )
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// json-server --watch db.json --port 3004