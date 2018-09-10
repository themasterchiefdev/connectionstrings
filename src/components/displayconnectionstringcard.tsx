/* tslint:disable:object-literal-sort-keys 
   tslint:disable-next-line:jsx-no-lambda
   tslint:disable-next-line:no-console
*/

import * as React from "react";
import { Component } from "react";
import ConnectionStringsJSON, {
  IConnectionStringDetails
} from "../services/stringdata";

export interface IConnectionStringProps {
  databaseProvider: string;
}

export interface IConnectionStringPanelState {
  connProperties: IConnectionStringDetails[];
}

class ConnectionStringPanel extends Component<
  IConnectionStringProps,
  IConnectionStringPanelState
> {
  constructor(props: IConnectionStringProps) {
    super(props);
    this.getConnStringDetails = this.getConnStringDetails.bind(this);
    // const dbProvider = this.props.databaseProvider;
    this.state = {
      // connProperties: this.getConnStringDetails("Excel")
      connProperties: this.getConnStringDetails(this.props.databaseProvider)
    };
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log("Hello!! " + this.props.databaseProvider);
    // tslint:disable-next-line:no-console

    return (
      <div className="card">
        {this.state.connProperties.map(cs => (
          <React.Fragment key={"cs_" + cs.description}>
            <div className="card-header text-left font-weight-bold">
              {cs.description}
            </div>
            <div className="card-body">
              {cs.connectionString}
              &nbsp;
              {this.props.databaseProvider}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  private getConnStringDetails(dbProvider: string): IConnectionStringDetails[] {
    const s = new ConnectionStringsJSON();
    // tslint:disable-next-line:no-console
    console.log("Conn " + dbProvider);
    // this.setState({
    //   connProperties:s.getConnectionStringDetails(dbProvider)
    // });
    // this.setState(() => {
    //   return (
    //     connProperties: s.getConnectionStringDetails
    //   )
    // });
    return s.getConnectionStringDetails(dbProvider);
  }
}

export default ConnectionStringPanel;
