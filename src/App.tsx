import * as React from "react";
import "./App.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import { ConnectionStrings } from "./components/connectionstrings";

class App extends React.Component {
  public render() {
    
    return (
      <div className="App">
        <Navbar header="Generate Connection Strings" />
        <main role="main" className="container body-add-padding">
          <ConnectionStrings />
        </main>
        <Footer githubRepoUrl="https://github.com/yvrkarthik/BuildConnectionStrings" />
      </div>
    );
  }


}

export default App;
