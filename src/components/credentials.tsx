import * as React from "react";

export enum CredentialFieldTypeEnum {
  login,
  password
}
interface IUserCredentialProps {
  onValueChange: any;
  placeHolder: string;
  credentialValue: string;
  credentialFieldType: CredentialFieldTypeEnum;
  labelValue: string;
}

export function Credential(props: IUserCredentialProps) {
  
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            {props.labelValue}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={props.credentialValue}
          onChange={props.onValueChange}
          placeholder={props.placeHolder}
        />
      </div>
    </React.Fragment>
  );
}
