import * as React from "react";
import { Component } from "react";

// Props to define the header
export interface INavbarProps {
  header: string;
}
// build navbar
class Navbar extends Component<INavbarProps, {}> {
  constructor(props: INavbarProps) {
    super(props);
  }
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#">
          {this.props.header}
        </a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto" />
        </div>
      </nav>
    );
  }
}
export default Navbar;
