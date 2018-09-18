import * as React from "react";
import { IConnectionStringDetails } from "../services/stringdata";

/**
 * Defines the ConnectionStringPanel props
 * @interface IConnectionStringProps
 */
export interface IConnectionStringProps {
  connectionString: IConnectionStringDetails[];
  databaseServerName: string;

  databaseLoginName: string;
  databaseLoginPassword: string;
  databaseName: string;

  copyString: any;
}

/**
 * This class displays the connection string card onto the main app UI.
 * @param props
 */
class ConnectionStringCard extends React.Component<IConnectionStringProps, {}> {
  constructor(props: IConnectionStringProps) {
    super(props);
  }

  public render() {
    return (
      <React.Fragment>
        {/*Display card only if the database is selected*/}
        {this.props.connectionString.length === 0
          ? "Please select a database provider to start with."
          : this.displayConnectionStringCard(this.props)}
      </React.Fragment>
    );
  }

  // return the mark-up of the connection string card
  private displayConnectionStringCard(props: IConnectionStringProps) {
    return props.connectionString.map((cs, i) => (
      <div className="add-padding-bottom" key={"button_" + i}>
        <div className="card">
          <div className="card-header text-left font-weight-bold">
            {cs.description}
            <button
              type="button"
              className="btn btn-secondary btn-sm app-align-right clipboard"
              onClick={props.copyString}
              key={"button_" + i}
              data-clipboard-text={cs.connectionString
                .replace("rajivsservername", this.props.databaseServerName)
                .replace("rajivsusername", this.props.databaseLoginName)
                .replace("rajivspasssword", this.props.databaseLoginPassword)
                .replace("rajivsdatabase", this.props.databaseName)}
            >
              <i className="fa fa-copy" key={"ic_" + i} />
              &nbsp;&nbsp;Copy
            </button>
            <div className="clear-fix" key={"cl_" + i} />
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
