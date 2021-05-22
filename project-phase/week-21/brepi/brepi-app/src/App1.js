import React from 'react';

import Header from './Header';
import BeerList from './BeerList';
import useFetch from './useFetch';

class App extends React.Component {
  constructor() {
    super();
    const { data, isPending, error } = useFetch('https://api.punkapi.com/v2/beers?page=1&per_page=6');
  }

  state = {
    loading: true,
    beer: null,
  };

  // async componentDidMount() {
  //   const url = ;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ beer: data[0], loading: false });
  //   console.log(data[0]);
  // }

  render() {
    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div>
          {this.state.loading || !this.state.beer ? (
            <div>loading...</div>
          ) : (
            <BeerList beer={this.componentDidMount} />
            /* <div>
              <div>{this.state.beer.name} </div>
              <div>{this.state.beer.description} </div>
              <img src={this.state.beer.image_url} className="beer-img" />
            </div> */
          )}
        </div>
      </div>
    );
  }
}

export default App;

//help: Ben Awad = https://www.youtube.com/watch?v=T3Px88x_PsA
