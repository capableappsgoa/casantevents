import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          NEW WEBSITE IN DEVELOPMENT MODE
        </p>
        <div style={{display: "flex"}}>
        <a
        style={{marginLeft: "10px"}}
          className="App-link"
          href="https://www.instagram.com/casantevents.goa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
         style={{marginLeft: "10px"}}
          className="App-link"
          href="https://www.facebook.com/profile.php?id=100063716452803"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
         style={{marginLeft: "10px"}}
          className="App-link"
          href="https://www.linkedin.com/company/cas-ant-events-private-limited/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked in
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
