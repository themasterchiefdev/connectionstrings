/* tslint:disable:object-literal-sort-keys */

import * as React from "react";
import { Component } from "react";
import ConnectionStringsJSON, {
  IConnectionStringProvider
} from "../services/stringdata";

export interface IMyComponentState {
  connStrings: IConnectionStringProvider[];
}
export class ConnectionStrings extends Component<{}, IMyComponentState> {
  // has no props
  constructor(props: {}) {
    super(props);
    // get the state from the private function
    this.state = {
      connStrings: this.getAllConnectionStrings()
    };
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Select the Database Provider
            </label>
          </div>
          <select className="custom-select" id="inputGroupSelect01">
            <option selected={true}>Choose...</option>
            {this.state.connStrings.map(cs => (
              <option value={cs.databaseName}>{cs.databaseName}</option>
            ))}
          </select>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr className="text-left">
                <th scope="col">Database Name</th>
                <th scope="col">Connection String Details</th>
              </tr>
            </thead>
            <tbody>
              {this.state.connStrings.map(cs => (
                <tr key={cs.databaseName} className="text-left">
                  <td>{cs.databaseName}</td>
                  <td>
                    {cs.connectionStringDetails.map((sd, index) => (
                      <React.Fragment key={index}>
                        <div className="font-weight-bold">{sd.description}</div>
                        <div>{sd.connectionString}</div>
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }

  private getAllConnectionStrings(): IConnectionStringProvider[] {
    const connStrings = new ConnectionStringsJSON();
    return connStrings.getAllConnectionStrings();
  }
}
