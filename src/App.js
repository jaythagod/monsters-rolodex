import React, {Component} from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
     monsters:[],
     searchField: ''
    };

  }

  componentDidMount(){
    //runs when App component gets rendered to the DOM
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  //renders app
  render() {
    //destructuring state object
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>    
      </div>
    );
  }

}//class end


export default App;
