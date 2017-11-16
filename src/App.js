import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  addNum(e) {
    e.preventDefault();
    var num = this.state.num + 1;
    this.setState({
      num: num
    });
    this.props.changeReps(this.props.index, num);
  }

  subNum(e) {
    e.preventDefault();
    if (this.state.num < 1)
      return ;
    var num = this.state.num - 1;
    this.setState({
      num: num
    });
    this.props.changeReps(this.props.index, num);
  }

  render() {
    return (
      <div className="Counter">
        <button onClick={(e) => this.addNum(e)}>+</button>
        {this.state.num}
        <button onClick={(e) => this.subNum(e)}>-</button>
      </div>
    );
  }
}

class NewWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numSets: 1,
      sets: [0]
    }
    this.changeReps = this.changeReps.bind(this);
  }

  addSet(e) {
    e.preventDefault();
    var sets = this.state.sets;
    sets.push(0);
    this.setState({
      numSets: this.state.numSets + 1,
      sets: sets
    });
  }

  subSet(e) {
    e.preventDefault();
    var sets = this.state.sets;
    if (this.state.numSets < 2)
      return ;
    sets.splice(-1, 1);
    console.log(sets.length)
    this.setState({
      numSets: this.state.numSets - 1,
      sets: sets
    });
  }

  changeReps(i, count) {
    var sets = this.state.sets;
    sets[i] = count;
    this.setState({
      sets: sets
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }



  render() {
    var sets = [];
    for (var i = 0; i < this.state.numSets; i++)
      sets.push(<Counter index={i} changeReps={this.changeReps}/>)
    return (
        <form>
          <input type="text" onChange={(e) => this.handleNameChange(e)}/>
          <div className="Counter">
            <button onClick={(e) => this.addSet(e)}>+</button>
            Sets
            <button onClick={(e) => this.subSet(e)}>-</button>
            {sets}
          </div>
          <button type="submit">Add</button>
        </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewWorkout />
      </div>
    );
  }
}

export default App;
