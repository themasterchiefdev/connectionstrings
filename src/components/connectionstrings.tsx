/* tslint:disable:object-literal-sort-keys 
   tslint:disable-next-line:jsx-no-lambda
   tslint:disable-next-line:no-console
*/

import * as React from "react";
import { Component } from "react";
import ConnectionStringsJSON, {
  IConnectionStringDetails,
  IConnectionStringProvider
} from "../services/stringdata";
import ConnectionStringPanel from "./displayconnectionstringcard";

export interface IConnectionStringComponentState {
  connStrings: IConnectionStringProvider[];
  databaseProvider: string;
  connectionType: string;
  databaseServerName: string;
}
export class ConnectionStrings extends Component<
  {},
  IConnectionStringComponentState
> {
  private readonly InitialiseConnectionStringJsonClass = new ConnectionStringsJSON();

  constructor(props: {}) {
    super(props);
    // get the state from the private function
    this.state = {
      connStrings: this.getAllConnectionStrings(),
      databaseProvider: "",
      connectionType: "",
      databaseServerName: ""
    };
    // bind selected database provider event handler
    this.selectedDatabaseProvider = this.selectedDatabaseProvider.bind(this);
    this.selectedConnectionStringType = this.selectedConnectionStringType.bind(
      this
    );
    this.handleDatabaseServerNameChange = this.handleDatabaseServerNameChange.bind(this);
  }

  public render(): JSX.Element {
    // Loop through the JSON data and populate the drop down list with DB providers.
    const databaseProvidersList = this.displayDatabaseProvidersList();
    // loop through and display all connection strings based on the database provider selected.
    const displayConnectionStringsRelatedToProviders = this.displayConnectionStringsBasedOnProvider();
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="databaseProviderList">
              Select the Database Provider
            </label>
          </div>
          <select
            className="custom-select"
            id="databaseProviderList"
            onChange={this.selectedDatabaseProvider}
          >
            <option value="">Choose...</option>
            {databaseProvidersList}
          </select>
        </div>
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Select Connection Type
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
            </div>
            <select
              className="custom-select"
              id="connectiontypeselectgroup"
              onChange={this.selectedConnectionStringType}
            >
              <option value="">Choose...</option>
              <option value="Trusted">Trusted Connection</option>
              <option value="Database">Database Login</option>
            </select>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">
              Enter Database Server Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            value={this.state.databaseServerName}
            onChange={this.handleDatabaseServerNameChange}
          />
        </div>
        {displayConnectionStringsRelatedToProviders}
      </React.Fragment>
    );
  }

  private displayConnectionStringsBasedOnProvider() {
    const stringsList = this.getConnectionStringsFortheProvider(
      this.state.databaseProvider,
      this.state.connectionType
    );
    if (stringsList.length === 0) {
      return <p>No Connection strings defined.</p>;
    }
    return stringsList.map((cs, i) => (
      <ConnectionStringPanel
        key={"strings_" + i}
        databaseProvider={cs.description}
        connectionString={cs.connectionString}
        databaseServerName={this.state.databaseServerName}
      />
    ));
  }

  private displayDatabaseProvidersList() {
    return this.state.connStrings.map((cs, i) => (
      <option value={cs.databaseName} key={"options_" + i}>
        {cs.databaseName}
      </option>
    ));
  }
  private handleDatabaseServerNameChange(e: any) {
    const dbServerName = e.target.value;
    this.setState({
      databaseServerName: dbServerName
    });
  }
  private selectedDatabaseProvider(e: any) {
    const selectedValue = e.target.value;
    const getConnectionTypeDrpDwnList: HTMLSelectElement = document.getElementById(
      "connectiontypeselectgroup"
    ) as HTMLSelectElement;
    // validate the selectedValue
    if (selectedValue === "") {
      getConnectionTypeDrpDwnList.selectedIndex = 0;
      this.setState({
        databaseProvider: "",
        databaseServerName:""
      });
    } else {
      getConnectionTypeDrpDwnList.selectedIndex = 0;
      this.setState({
        databaseProvider: selectedValue,
        connectionType: "",
        databaseServerName: ""
      });
    }
  }

  private selectedConnectionStringType(e: any) {
    const selectedValue = e.target.value;
    // tslint:disable-next-line:no-console
    // console.log(selectedValue);
    // validate the selectedValue
    if (selectedValue === "") {
      this.setState({
        connectionType: "",
        databaseServerName: ""
      });
    } else {
      this.setState({
        connectionType: selectedValue,
        databaseServerName: ""
      });
    }
  }

  private getAllConnectionStrings(): IConnectionStringProvider[] {
    const connStrings = this.InitialiseConnectionStringJsonClass;
    return connStrings.getAllConnectionStrings();
  }

  private getConnectionStringsFortheProvider(
    dbprovider: string,
    connectionType: string
  ): IConnectionStringDetails[] {
    const connStrings = this.InitialiseConnectionStringJsonClass;
    return connStrings.getConnectionStringDetailsFilteredByConnectionType(
      dbprovider,
      connectionType
    );
  }
}
