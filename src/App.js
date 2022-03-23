import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      actors: "hi"
    }
    this.getPicture = this.getPicture.bind(this)

  }

  getPicture() {
    let image = document.createElement("img")
    image.src = `https://image.tmdb.org/t/p/original/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg`
    document.getElementsByClassName("App").item(0).appendChild(image)
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/278/credits?api_key=c0c9136d20e3a6924f56d64e9ea2a53c")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          actors: result.cast.splice(0,5)
        })
        console.log(this.state.actors)
      }
      )
    this.getPicture()
  }

  render() {
    const {actors} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
