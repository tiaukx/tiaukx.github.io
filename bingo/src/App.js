import Navi from "./components/Navi";
import PageLoad from "./components/PageLayout";
import background from "./images/twilight-bg.jpg";

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, height: '100vh', width: '100vh'}}>
      <header className="App-header">
        <Navi />
      </header>
      <body style={{backgroundImage: `url(${background})`}}>
        <br/>
        <PageLoad />
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/>

      </body>
    </div>
  );
}

export default App;
