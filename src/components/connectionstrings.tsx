/* tslint:disable:object-literal-sort-keys 
   tslint:disable-next-line:jsx-no-lambda
   tslint:disable-next-line:no-console
*/

import * as React from "react";
import { Component } from "react";
import ConnectionStringsJSON, {
  IConnectionStringProvider
} from "../services/stringdata";
import ConnectionStringPanel from "./displayconnectionstringcard";

export interface IConnectionStringComponentState {
  connStrings: IConnectionStringProvider[];
  databaseProvider: string;
}
export class ConnectionStrings extends Component<
  {},
  IConnectionStringComponentState
> {
  // has no props
  constructor(props: {}) {
    super(props);
    // get the state from the private function
    this.state = {
      connStrings: this.getAllConnectionStrings(),
      databaseProvider: ""
    };
    // bind selected database provider event handler
    this.selectedDatabaseProvider = this.selectedDatabaseProvider.bind(this);
  }

  public render(): JSX.Element {
    const databaseProvidersList = this.state.connStrings.map(cs => (
      <option value={cs.databaseName} key={cs.databaseName}>
        {cs.databaseName}
      </option>
    ));
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Select the Database Provider
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={this.selectedDatabaseProvider}
          >
            <option value="">Choose...</option>
            {databaseProvidersList}
          </select>
        </div>
        <ConnectionStringPanel databaseProvider={this.state.databaseProvider} />
      </React.Fragment>
    );
  }

  private selectedDatabaseProvider(e: any) {
    const selectedValue = e.target.value;
    // validate the selectedValue
    if (selectedValue === "") {
      // tslint:disable-next-line:no-console
      console.log("Please select a database provider");
      this.setState({
        databaseProvider: ""
      });
    } else {
      // tslint:disable-next-line:no-console
      // console.log("Option Selected " + selectedValue);

      this.setState({
        databaseProvider: selectedValue
      });
    }
  }
  private getAllConnectionStrings(): IConnectionStringProvider[] {
    const connStrings = new ConnectionStringsJSON();
    return connStrings.getAllConnectionStrings();
  }
}
