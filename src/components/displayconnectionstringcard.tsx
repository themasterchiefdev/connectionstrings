/* tslint:disable:object-literal-sort-keys 
   tslint:disable-next-line:jsx-no-lambda
   tslint:disable-next-line:no-console
*/

import * as React from "react";
import { Component } from "react";
import { IConnectionStringDetails } from "../services/stringdata";

export interface IConnectionStringProps {
  databaseProvider: string;
  connectionString: string;

  databaseServerName: string;
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
  }

  public render() {
    return (
      <React.Fragment>
        <div className="add-padding-bottom">
          <div className="card">
            <div className="card-header text-left font-weight-bold">
              {this.props.databaseProvider}
            </div>
            <div className="card-body">
              <code id={this.props.connectionString}>
                {this.props.connectionString.replace(
                  "rajivsservername",
                  this.props.databaseServerName
                )}
              </code>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ConnectionStringPanel;
