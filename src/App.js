import './App.css';

function App() {

  var stuff

  var request = new XMLHttpRequest()

  request.open('GET', 'https://api.themoviedb.org/3/movie/278/credits?api_key=c0c9136d20e3a6924f56d64e9ea2a53c', true)
  request.onload = function () {
    console.log(this.response)
  }
  
  request.send()

  return (
    <div className="App">
      <header className="App-header">
        <p>
          hi
        </p>
      </header>
    </div>
  );
}

export default App;
