import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      dogImage: '',
    };

    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    this.setState(
      { isLoading: true },
      async () => {
        const dogJson = await fetch('https://dog.ceo/api/breeds/image/random');
        const dogObj = await dogJson.json();
        const { message: dogImageUrl } = dogObj;
        this.setState({
          isLoading: false,
          dogImage: dogImageUrl,
        });
      },
    );
  }

  render() {
    const { isLoading, dogImage } = this.state;
    return (
      <div className="App">
        <h1>Cachorros</h1>
        <p>
          {
            isLoading
              ? <span>Carregando...</span>
              : <img className="dogImg" src={ dogImage } alt="Dog" />
          }
        </p>
        <button onClick={ this.fetchDog } type="button">Próximo</button>
      </div>
    );
  }
}

export default App;
