import * as React from "react";

interface IUsernameProps {
  onValueChange: any;
  placeHolder: string;
  loginName: string;
}

export function Username(props: IUsernameProps) {
  return (
    <React.Fragment>
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
          value={props.loginName}
          onChange={props.onValueChange}
          placeholder={props.placeHolder}
        />
      </div>
    </React.Fragment>
  );
}
