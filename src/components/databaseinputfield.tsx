import * as React from "react";

/**
 * Enum for specify the type of the input field
 * @enum InputFieldTypeEnum
 * @readonly
 *
 */

export enum InputFieldTypeEnum {
  login,
  password,
  servername
}
/**
 * @interface IDatabaseInputFieldProps
 * @property onValueChange -- Triggers the onChangeEvent of the input field
 * @property placeHolder -- Defines the placeholder text of the text box
 * @property inputValue -- sets the value of the textbox
 * @property inputFieldType -- This is just for identifying the item in the parent component
 * @property labelValue -- Sets the value of the input group
 */
interface IDatabaseInputFieldProps {
  onValueChange: any;
  placeHolder: string;
  inputValue: string;
  inputFieldType: InputFieldTypeEnum;
  labelValue: string;
}

/**
 * Component to return the input group containing text boxes.
 * @param props {IDatabaseInputFieldProps}
 */
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
