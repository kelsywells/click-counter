import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); 
  
  this.state= {
    clicks: 0
  }
  }
  increment = () => {
    const newClick= (
      this.state.clicks + 1
    )
    this.setState({
      clicks: newClick
    })
  }

  render() {
  return (
    <div 
    className="App"
    >
      <h2>
        Number of clicks: <br/> 
        </h2><h1>
        {this.state.clicks}
        </h1>
      <button onClick={this.increment}>click here</button>
    </div>
  );
}
}

export default App;
