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
import ConnectionType from "./connectiontype";
import { DatabaseInputField, InputFieldTypeEnum } from "./credentials";
import ConnectionStringCard from "./displayconnectionstringcard";
// import ServerName from "./servername";

/**
 * Defines the state of the Component
 * @interface IConnectionStringComponentState
 */
export interface IConnectionStringComponentState {
  connStrings: IConnectionStringProvider[];
  databaseProvider: string;
  connectionType: string;
  databaseServerName: string;
  databaseLogin: string;
  databasePassword: string;
}

export class ConnectionStrings extends Component<
  {},
  IConnectionStringComponentState
> {
  // Initialize the JSON class from which the connections strings will be returned
  private readonly InitialiseConnectionStringJsonClass = new ConnectionStringsJSON();

  constructor(props: {}) {
    super(props);

    this.state = {
      connStrings: this.getAllConnectionStrings(),
      databaseProvider: "",
      connectionType: "",
      databaseServerName: "",
      databaseLogin: "",
      databasePassword: ""
    };
    // bind selected database provider event handler
    this.selectedDatabaseProvider = this.selectedDatabaseProvider.bind(this);
    // bind the connection type event handler
    this.selectedConnectionStringType = this.selectedConnectionStringType.bind(
      this
    );
    // bind the connection type event handler
    this.handleDatabaseServerNameChange = this.handleDatabaseServerNameChange.bind(
      this
    );
    this.setDatabaseLoginName = this.setDatabaseLoginName.bind(this);

    this.setDatabaseLoginPassword = this.setDatabaseLoginPassword.bind(this);
  }

  public render(): JSX.Element {
    // Loop through the JSON data and populate the drop down list with DB providers.
    const databaseProvidersList = this.displayDatabaseProvidersList();
    // loop through and display all connection strings based on the database provider selected.
    const displayConnectionStringsRelatedToProviders = this.displayConnectionStringsBasedOnProvider();
    const isTrustedConnection = this.state.connectionType;
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
        <ConnectionType
          selectedConnectionStringType={this.selectedConnectionStringType}
        />

        {/* <ServerName
          databaseServerName={this.state.databaseServerName}
          handleDatabaseServerNameChange={this.handleDatabaseServerNameChange}
        /> */}
        <DatabaseInputField
          labelValue={"Enter Database Server Name"}
          placeHolder={"database server name"}
          onValueChange={this.handleDatabaseServerNameChange}
          inputValue={this.state.databaseServerName}
          inputFieldType={InputFieldTypeEnum.servername}
        />

        {/* Only display the Username textbox if the connection type is database*/}
        {isTrustedConnection === "Database" ? (
          <DatabaseInputField
            labelValue={"Enter Database Login"}
            placeHolder={"Login username"}
            onValueChange={this.setDatabaseLoginName}
            inputValue={this.state.databaseLogin}
            inputFieldType={InputFieldTypeEnum.login}
          />
        ) : (
          ""
        )}
        {/* Only display the Username textbox if the connection type is database*/}
        {isTrustedConnection === "Database" ? (
          <DatabaseInputField
            labelValue={"Enter Database Password"}
            placeHolder={"Login password"}
            onValueChange={this.setDatabaseLoginPassword}
            inputValue={this.state.databasePassword}
            inputFieldType={InputFieldTypeEnum.password}
          />
        ) : (
          ""
        )}
        {displayConnectionStringsRelatedToProviders}
      </React.Fragment>
    );
  }

  //#region Set-up HTML UI elements
  // this would display the connection strings based on the provider selected
  private displayConnectionStringsBasedOnProvider() {
    const stringsList = this.getConnectionStringsFortheProvider(
      this.state.databaseProvider,
      this.state.connectionType
    );
    if (stringsList.length === 0) {
      return <p>No Connection strings defined.</p>;
    }
    return stringsList.map((cs, i) => (
      <ConnectionStringCard
        key={"strings_" + i}
        databaseProvider={cs.description}
        connectionString={cs.connectionString}
        databaseServerName={this.state.databaseServerName}
        databaseLoginName={this.state.databaseLogin}
        databaseLoginPassword={this.state.databasePassword}
      />
    ));
  }

  // initialize the database provider drop down list
  private displayDatabaseProvidersList() {
    return this.state.connStrings.map((cs, i) => (
      <option value={cs.databaseName} key={"options_" + i}>
        {cs.databaseName}
      </option>
    ));
  }
  // get the database login name
  private setDatabaseLoginName(e: any) {
    const loginName = e.target.value;
    this.setState({ databaseLogin: loginName.toString().trim() });
  }
  // get the database login name
  private setDatabaseLoginPassword(e: any) {
    const loginPassword = e.target.value;
    this.setState({ databasePassword: loginPassword.toString().trim() });
  }
  // get the database name from the text box and set it to databaseServerName
  // also prevent adding white spaces to the server name
  private handleDatabaseServerNameChange(e: any) {
    const dbServerName = e.target.value;
    this.setState({
      databaseServerName: dbServerName.toString().trim()
    });
  }
  // fire the onChange when database provider changes
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
        databaseServerName: "",
        databaseLogin: "",
        databasePassword: ""
      });
    } else {
      getConnectionTypeDrpDwnList.selectedIndex = 0;
      this.setState({
        databaseProvider: selectedValue,
        connectionType: "",
        databaseServerName: "",
        databaseLogin: "",
        databasePassword: ""
      });
    }
  }

  // fire the onChange when connection type changes
  private selectedConnectionStringType(e: any) {
    const selectedValue = e.target.value;

    if (selectedValue === "") {
      this.setState({
        connectionType: ""
      });
    } else {
      this.setState({
        connectionType: selectedValue
      });
    }
  }

  //#endregion

  //#region Interact with services

  /**
   * Gets all the connection string values
   * @returns IConnectionStringProvider[]
   */
  private getAllConnectionStrings(): IConnectionStringProvider[] {
    const connStrings = this.InitialiseConnectionStringJsonClass;
    return connStrings.getAllConnectionStrings();
  }

  /**
   * Gets the list of connection strings based on the dbProvider and connectionType
   * @param dbprovider string
   * @param connectionType string
   * @returns -- IConnectionStringDetails[]
   * @example
   * this.getConnectionStringsFortheProvider(databaseProvider,connectionType);
   */
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

  //#endregion
}
