import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    loading: true,
    beer: null,
  };

  async componentDidMount() {
    const url = 'https://api.punkapi.com/v2/beers/random';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ beer: data[0], loading: false });
    console.log(data[0]);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.beer ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.beer.name} </div>
            <div>{this.state.beer.description} </div>
            <img src={this.state.beer.image_url} className="beer-img" />
          </div>
        )}
      </div>
    );
  }
}

export default App;

//help: Ben Awad = https://www.youtube.com/watch?v=T3Px88x_PsA
