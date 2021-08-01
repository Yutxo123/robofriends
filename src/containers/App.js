import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Scroll';
import SearchBox from '../Components/SearchBox';

class App extends Component {
    constructor(){                               // special method , to initilize variables // 
        super();                                 // this : what is the object envirment that we're in right now // 
            this.state ={                        // super () must be called to use this , it contains what change our app , it lives usually in the parent component // 
                robots:[],                       // make the website interactive , between the searchbox and robots // 
                searchfield:''
            }
    }
componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(response => {
       return response.json();
    })
    .then(users =>{
        this.setState({robots : users})
    });
}
    onsearchchange=(event)=>{
        this.setState({ searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0 ){
           return <h1>Loading</h1>
        }
        else {
    return(
        <div className='tc pa2'>
            <h1> RoboFriends </h1>
            <SearchBox searchChange = {this.onsearchchange}/>  
            <Scroll> 
                      <CardList robots = {filteredRobots}/>  
            </Scroll>
        </div>
        );
}
}     
}                                                           // robots are passed down as props , eventhough in the App.js is a state // 

export default App;