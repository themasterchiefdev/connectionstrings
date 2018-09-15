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
import ConnectionStringCard from "./connectionstringcard";
// import ConnectionStringCard from "./connectionstringcard";
import ConnectionType from "./connectiontype";
import { DatabaseInputField, InputFieldTypeEnum } from "./databaseinputfield";
import DatabaseProviderList from "./databaseproviderlist";

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
  databaseName: string;
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
      databasePassword: "",
      databaseName: ""
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
    // bind the database login id event handler
    this.setDatabaseLoginName = this.setDatabaseLoginName.bind(this);

    // bind the database login password
    this.setDatabaseLoginPassword = this.setDatabaseLoginPassword.bind(this);

    // bind the database name event handler
    this.setDatabaseName = this.setDatabaseName.bind(this);

    // bind the reset functionality
    this.handleReset = this.handleReset.bind(this);
  }

  public render(): JSX.Element {
    // Loop through the JSON data and populate the drop down list with DB providers.
    // const databaseProvidersList = this.displayDatabaseProvidersList();

    // loop through and display all connection strings based on the database provider selected.
    // const displayConnectionStringsRelatedToProviders = this.displayConnectionStringsBasedOnProvider();

    // Used to render the database login and password input fields
    const isTrustedConnection = this.state.connectionType;

    return (
      <React.Fragment>
        <DatabaseProviderList
          onReset={this.handleReset}
          isDisabled={this.state.databaseProvider === ""}
          databaseProviderList={this.state.connStrings}
          onSelectedChange={this.selectedDatabaseProvider}
        />
        <ConnectionType
          selectedConnectionStringType={this.selectedConnectionStringType}
          isDisabled={this.state.databaseProvider === ""}
        />

        <DatabaseInputField
          labelValue={`Enter Server/Instance Name\t\t`}
          placeHolder={"database server name"}
          onValueChange={this.handleDatabaseServerNameChange}
          inputValue={this.state.databaseServerName}
          inputFieldType={InputFieldTypeEnum.servername}
          isDisabled={this.state.connectionType === ""}
        />
        <DatabaseInputField
          labelValue={"Enter Database Name"}
          placeHolder={"database name"}
          onValueChange={this.setDatabaseName}
          inputValue={this.state.databaseName}
          inputFieldType={InputFieldTypeEnum.servername}
          isDisabled={this.state.databaseServerName === ""}
        />

        {/* Only display the Username textbox if the connection type is database*/}
        {isTrustedConnection === "Database" ? (
          <DatabaseInputField
            labelValue={"Enter Login"}
            placeHolder={"Login Id"}
            onValueChange={this.setDatabaseLoginName}
            inputValue={this.state.databaseLogin}
            inputFieldType={InputFieldTypeEnum.login}
            isDisabled={this.state.databaseName === ""}
          />
        ) : (
          ""
        )}
        {/* Only display the Username textbox if the connection type is database*/}
        {isTrustedConnection === "Database" ? (
          <DatabaseInputField
            labelValue={"Enter Password"}
            placeHolder={"Login password"}
            onValueChange={this.setDatabaseLoginPassword}
            inputValue={this.state.databasePassword}
            inputFieldType={InputFieldTypeEnum.password}
            isDisabled={this.state.databaseLogin === ""}
          />
        ) : (
          ""
        )}
        {/* {displayConnectionStringsRelatedToProviders} */}
        <ConnectionStringCard
          connectionString={this.getConnectionStringsBasedOnTheProvider()}
          databaseServerName={this.state.databaseServerName}
          databaseLoginName={this.state.databaseLogin}
          databaseLoginPassword={this.state.databasePassword}
          databaseName={this.state.databaseName}
        />
      </React.Fragment>
    );
  }

  //#region Set-up HTML UI elements
  // this would display the connection strings based on the provider selected
  // private displayConnectionStringsBasedOnProvider() {
  //   const stringsList = this.getConnectionStringsFortheProvider(
  //     this.state.databaseProvider,
  //     this.state.connectionType
  //   );
  //   // tslint:disable-next-line:no-console
  //   // console.log(stringsList.sort());
  //   if (stringsList.length === 0) {
  //     return <p>No Connection strings defined.</p>;
  //   }
  //   return stringsList.map((cs, i) => (
  //     <ConnectionStringCard
  //       key={"strings_" + i}
  //       databaseProvider={cs.description}
  //       connectionString={cs.connectionString}
  //       databaseServerName={this.state.databaseServerName}
  //       databaseLoginName={this.state.databaseLogin}
  //       databaseLoginPassword={this.state.databasePassword}
  //       databaseName={this.state.databaseName}
  //     />
  //   ));
  // }
  // get the connection strings based on the provider selected
  private getConnectionStringsBasedOnTheProvider() {
    const stringsList = this.getConnectionStringsFortheProvider(
      this.state.databaseProvider,
      this.state.connectionType
    );
    return stringsList;
  }
  // get the database login name
  private setDatabaseLoginName(e: any) {
    const loginName = e.target.value;
    this.setState({ databaseLogin: loginName.toString().trim() });
  }
  // get the database login password
  private setDatabaseLoginPassword(e: any) {
    const loginPassword = e.target.value;
    this.setState({ databasePassword: loginPassword.toString().trim() });
  }
  // get the database instance name password
  private setDatabaseName(e: any) {
    const instanceName = e.target.value;
    this.setState({ databaseName: instanceName.toString().trim() });
  }

  // reset all the fields
  private handleReset(e: any) {
    e.preventDefault();
    const getConnectionTypeDrpDwnList: HTMLSelectElement = document.getElementById(
      "connectiontypeselectgroup"
    ) as HTMLSelectElement;
    const getDatabaseProviderDrpDwnList: HTMLSelectElement = document.getElementById(
      "databaseProviderList"
    ) as HTMLSelectElement;
    this.setState({
      databaseProvider: "",
      databaseServerName: "",
      databaseLogin: "",
      databasePassword: "",
      databaseName: "",
      connectionType: ""
    });

    getConnectionTypeDrpDwnList.selectedIndex = 0;
    getDatabaseProviderDrpDwnList.selectedIndex = 0;
  }
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
        databasePassword: "",
        databaseName: ""
      });
    } else {
      getConnectionTypeDrpDwnList.selectedIndex = 0;
      this.setState({
        databaseProvider: selectedValue,
        connectionType: "",
        databaseServerName: "",
        databaseLogin: "",
        databasePassword: "",
        databaseName: ""
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
