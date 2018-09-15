import * as React from "react";
// import { Component } from "react";
export interface IConnectionTypeProps {
  selectedConnectionStringType: any;
  isDisabled: boolean;
}

/**
 * Sets the up Connection Type component
 * @param props
 */
const ConnectionType: React.SFC<IConnectionTypeProps> = (
  props: IConnectionTypeProps
) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Select Connection Type
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
        <select
          className="custom-select"
          id="connectiontypeselectgroup"
          onChange={props.selectedConnectionStringType}
          disabled={props.isDisabled}
        >
          <option value="">Choose...</option>
          <option value="Trusted">Trusted Connection</option>
          <option value="Database">Database Login</option>
        </select>
      </div>
    </div>
  );
};

export default ConnectionType;
