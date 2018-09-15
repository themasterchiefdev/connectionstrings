import * as React from "react";
export interface IServerNameProps { 
  handleDatabaseServerNameChange: any;
  databaseServerName: string; 
}

class ServerName extends React.Component<IServerNameProps, {}> {
  constructor(props: IServerNameProps) {
    super(props);
  }
  public render() {
    return (
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
          value={this.props.databaseServerName}
          onChange={this.props.handleDatabaseServerNameChange}
          placeholder={"database server name"}
        />
      </div>
    );
  }
}

export default ServerName;
