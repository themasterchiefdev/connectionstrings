import * as React from "react";
import { Component } from "react";

export interface IConnectionStringProps {
  description: string;
  generatedString: string;
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
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.description}</div>
        <div className="panel-body">{this.props.generatedString}</div>
      </div>
    );
  }
}

export default ConnectionStringPanel;
