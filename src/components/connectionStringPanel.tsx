import * as React from "react";
import { Component } from "react";

export interface IConnectionStringProps {
  databaseProvider: any;
  // generatedString: string;
}

// export interface IConnectionStringState {

// }

class ConnectionStringPanel extends Component<IConnectionStringProps, {}> {
  constructor(props: IConnectionStringProps) {
    super(props);
  }
  // state = { :  }
  public render() {
    return (
      <div className="card">
        <div className="card-header text-left font-weight-bold">{this.props.databaseProvider}</div>
        <div className="card-body">{this.props.databaseProvider}</div>
      </div>
    );
  }
}

export default ConnectionStringPanel;

{
  /* <div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <a href="#" class="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>; */
}
