import * as React from "react";

export enum InputFieldTypeEnum {
  login,
  password,
  servername
}
interface IDatabaseInputFieldProps {
  onValueChange: any;
  placeHolder: string;
  inputValue: string;
  inputFieldType: InputFieldTypeEnum;
  labelValue: string;
}

export function DatabaseInputField(props: IDatabaseInputFieldProps) {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            {props.labelValue}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={props.inputValue}
          onChange={props.onValueChange}
          placeholder={props.placeHolder}
        />
      </div>
    </React.Fragment>
  );
}
