import Navi from "./components/Navi";
import PageLoad from "./components/PageLayout";

function App() {
  return (
    <div className="App" style={{}}>
      <header className="App-header">
        <Navi />
      </header>
      <body>
        <br/>
        <PageLoad />
      </body>
    </div>
  );
}

export default App;
