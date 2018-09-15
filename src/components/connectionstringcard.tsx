import * as React from "react";
import { IConnectionStringDetails } from "../services/stringdata";

/**
 * Defines the ConnectionStringPanel props
 * @interface IConnectionStringProps
 */
export interface IConnectionStringProps {
  //   databaseProvider: string;
  //   connectionString: string;

  connectionString: IConnectionStringDetails[];
  databaseServerName: string;

  databaseLoginName: string;
  databaseLoginPassword: string;
  databaseName: string;
}

// export interface State {

// }

class ConnectionStringCard extends React.Component<IConnectionStringProps, {}> {
  constructor(props: IConnectionStringProps) {
    super(props);
  }
  public render() {
    return (
      <React.Fragment>
        {/* {this.props.connectionString.map((cs, i) => (
          <div className="add-padding-bottom">
            <div className="card">
              <div className="card-header text-left font-weight-bold">
                {cs.description}
              </div>
              <div className="card-body">
                <code id={"string_" + i} className="code-font">
                  {cs.connectionString
                    .replace("rajivsservername", this.props.databaseServerName)
                    .replace("rajivsusername", this.props.databaseLoginName)
                    .replace(
                      "rajivspasssword",
                      this.props.databaseLoginPassword
                    )
                    .replace("rajivsdatabase", this.props.databaseName)}
                </code>
              </div>
            </div>
          </div>
        ))} */}
        {this.props.connectionString.length === 0
          ? "Please select a database provider to start with."
          : this.displayConnectionStringCard(this.props)}
        {/* {this.displayConnectionStringCard(this.props)} */}
      </React.Fragment>
    );
  }

  private displayConnectionStringCard(props: IConnectionStringProps) {
    return props.connectionString.map((cs, i) => (
      <div className="add-padding-bottom">
        <div className="card">
          <div className="card-header text-left font-weight-bold">
            {cs.description}
          </div>
          <div className="card-body">
            <code id={"string_" + i} className="code-font">
              {cs.connectionString
                .replace("rajivsservername", this.props.databaseServerName)
                .replace("rajivsusername", this.props.databaseLoginName)
                .replace("rajivspasssword", this.props.databaseLoginPassword)
                .replace("rajivsdatabase", this.props.databaseName)}
            </code>
          </div>
        </div>
      </div>
    ));
  }
}

export default ConnectionStringCard;
