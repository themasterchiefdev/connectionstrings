import * as React from "react";
import { Component } from "react";

interface IUsernameProps {
  databaseLogin: string;
}
export class Username extends Component<IUsernameProps, {}> {
  constructor(props: IUsernameProps) {
    super(props);
  }
  public render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            Enter Username
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          //   value={this.state.databaseServerName}
          //   onChange={this.handleDatabaseServerNameChange}
          placeholder={"database login name"}
        />
      </div>
    );
  }
}
