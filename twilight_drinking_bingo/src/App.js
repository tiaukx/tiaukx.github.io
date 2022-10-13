import Navi from "./components/Navi";
import PageLoad from "./components/PageLayout";
import background from "./images/twilight-bg.jpg";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
      <header className="App-header">
        <Navi />
      </header>
      <body style={{backgroundImage: `url(${background})`}}>
        <br/>
        <PageLoad />
      </body>
    </div>
  );
}

export default App;
