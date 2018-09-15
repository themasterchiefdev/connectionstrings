import * as React from "react";
import { IConnectionStringProvider } from "../services/stringdata";

export interface IDatabaseProviderListProps {
  onReset: any;
  isDisabled: boolean;
  databaseProviderList: IConnectionStringProvider[];

  onSelectedChange: any;
}

const DatabaseProviderList: React.SFC<IDatabaseProviderListProps> = (
  props: IDatabaseProviderListProps
) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="databaseProviderList">
          Select the Database Provider
        </label>
      </div>
      <select
        className="custom-select"
        id="databaseProviderList"
        onChange={props.onSelectedChange}
      >
        <option value="">Choose...</option>

        {props.databaseProviderList.map((cs, i) => (
          <option value={cs.databaseName} key={"options_" + i}>
            {cs.databaseName}
          </option>
        ))}
      </select>

      <button
        className="btn btn-danger"
        type="button"
        id="button-addon2"
        onClick={props.onReset}
        disabled={props.isDisabled}
      >
        Reset
      </button>
    </div>
  );
};

export default DatabaseProviderList;
