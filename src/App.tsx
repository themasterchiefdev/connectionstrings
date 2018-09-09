import * as React from "react";
import "./App.css";
import { ConnectionStrings } from "./components/connectionstrings";
import Navbar from "./components/navbar";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar
          header="Generate Connection Strings"
          githubRepoUrl="https://github.com/yvrkarthik/BuildConnectionStrings"
        />
        <main role="main" className="container-fluid">
          <ConnectionStrings />
        </main>
      </div>
    );
  }
}

export default App;
