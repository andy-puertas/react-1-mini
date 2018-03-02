import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super () 
    this.state = {
        name: '',
        friends: [],
        pictures: ''
     
    }
  }

  updatePicture(val) {
    this.setState({picture: val})
  }

  updateName(val) {
    this.setState({name: val})
  }

  addFriend() {
    let friend = {
      name: this.state.name,
      picture: this.state.picture
    }
    let newArr = this.state.friends.slice(0)
    newArr.push(friend)
    this.setState({
      friends: newArr,
      name: '',
      picture: ''
    })
  }



  render() {
    return (
      <div className="App">
        <p>Name:</p><input 
        onChange={(e) => this.updateName(e.target.value) } 
        type ='text'
        value= {this.state.name}/>
        <p>Picture:</p><input 
        onChange={(e) => this.updatePicture(e.target.value) } 
        type ='text'
        value= {this.state.picture}/>
        <button onClick={() => this.addFriend()}>Add friend</button>
      </div>
    );
  }
}

export default App;
