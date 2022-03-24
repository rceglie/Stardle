import React from 'react';
import './App.css';
import Hint from './components/Hint.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      masterList: [],
      actors: []
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/281/credits?api_key=c0c9136d20e3a6924f56d64e9ea2a53c")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          actors: result.cast.splice(0,5)
        })
      }
      )
    fetch("https://api.themoviedb.org/3/list/8195972?api_key=c0c9136d20e3a6924f56d64e9ea2a53c&language=en-US")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          masterList: result.items
        })
      }
      )
  }

  render() {

    const {actors} = this.state
    console.log(actors)

    return (
      <div className="App">
        {actors.map((a) => <Hint actor={a} key={a.id}/> )}
        <header className="App-header">
          <p>
            text
          </p>
        </header>
      </div>
    );
  }
}

export default App;
