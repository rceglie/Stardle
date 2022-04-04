import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
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
    fetch("https://api.themoviedb.org/3/list/8195972?api_key=c0c9136d20e3a6924f56d64e9ea2a53c&language=en-US")
      .then(res => res.json())
      .then((result) => {
        this.setState({
          masterList: result.items
        }, () => {
          console.log(this.getTodaysMovie)
          let movie = this.state.masterList[this.getTodaysMovie()].id

          fetch(`https://api.themoviedb.org/3/movie/${movie}/credits?api_key=c0c9136d20e3a6924f56d64e9ea2a53c`)
          .then(res => res.json())
          .then((result) => {
            this.setState({
            actors: result.cast.splice(0,5)
          })
        }
      )

        })
      }
      )

  }

  hash(d, m, y){
    return (Math.pow(d,m) * Math.pow(Math.floor(y/d),m%d)) % this.state.masterList.length
  }

  getTodaysMovie(){
    const date = new Date();
    let d = date.getDate()
    let m = date.getMonth() + 1
    let y = date.getFullYear()
    let hash = this.hash(d, m, y)
    return hash;
  }

  checkHash(){
    const counts = {};
    let hashes = [];
    for (let d = 1; d < 32; d++){
      for (let m = 1; m < 13; m++){
        for (let y = 2020; y < 2040; y++){
          hashes.push(this.hash(d,m,y))
        }
      }
    }
    for (const num of hashes) {
      if (counts[num] != null){
        counts[num] = counts[num] + 1
      } else {
        counts[num] = 1
      }
    }
    console.log(counts)
  }

  render() {

    const {masterList, actors} = this.state 

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
