/* tslint:disable:object-literal-sort-keys */

import * as React from "react";
import { Component } from "react";
export interface IConnectionStringProvider {
  databaseName: string;
  connectionStringDetails: IConnectionStringDetails[];
}
export interface IConnectionStringDetails {
  description: string;
  connectionString: string;
}
export interface IMyComponentState {
  connStrings: IConnectionStringProvider[];
}
export class ConnectionStrings extends Component<{}, IMyComponentState> {
  constructor(props: {}) {
    // pass no props
    super(props);
    // get the state from the private function
    this.state = {
      connStrings: this.returnConnectionString()
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="text-left">
              <th scope="col">Database Name</th>
              <th scope="col">Connection String Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.connStrings.map(cs => (
              <tr key={cs.databaseName} className="text-left">
                <td>{cs.databaseName}</td>
                <td>
                  {cs.connectionStringDetails.map((sd, index) => (
                    <React.Fragment key={index}>
                      <div className="font-weight-bold">{sd.description}</div>
                      <div>{sd.connectionString}</div>
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  private returnConnectionString(): IConnectionStringProvider[] {
    const connectionStrings: IConnectionStringProvider[] = [
      {
        databaseName: "Access",

        connectionStringDetails: [
          {
            description: "Access ODBC Connection String Driver",
            connectionString:
              "{Microsoft Access Driver (*.mdb)};Dbq=C:demo.mdb;Uid=Admin;Pwd=;"
          }
        ]
      },
      {
        databaseName: "DB2",
        connectionStringDetails: [
          {
            description: "DB2 ODBC Connection String",
            connectionString:
              "driver={IBM DB2 ODBC DRIVER};Database=demodb;hostname=myservername;port=myPortNum;protocol=TCPIP; uid=myusername; pwd=mypasswd"
          },
          {
            description: "DB2 OLEDB Connection String",
            connectionString:
              "Provider=IBMDADB2;Database=demodeb;HOSTNAME=myservername;PROTOCOL=TCPIP;PORT=50000;uid=myusername;pwd=mypasswd;"
          }
        ]
      },
      {
        databaseName: "DBase",

        connectionStringDetails: [
          {
            description: "DBase ODBC Connection String",
            connectionString:
              "Driver={Microsoft dBASE Driver (*.dbf)};DriverID=277;Dbq=c:directory;"
          },
          {
            description: "DBase OLEDB Connection String",
            connectionString:
              "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:directory;Extended Properties=dBASE IV;User ID=Admin;Password="
          }
        ]
      },
      {
        databaseName: "Excel",
        connectionStringDetails: [
          {
            description: "Excel ODBC Connection String",
            connectionString:
              "Driver={Microsoft Excel Driver (*.xls)};DriverId=790;Dbq=C:MyExcel.xls;DefaultDir=c:directory;"
          },
          {
            description: "Excel OLEDB Connection String",
            connectionString:
              "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:MyExcel.xls;Extended Properties='" +
              "Excel 8.0; HDR=Yes; IMEX=1" +
              "'"
          }
        ]
      },
      {
        databaseName: "Exchange",
        connectionStringDetails: [
          {
            description: "Exchange OLEDB Connection String",
            connectionString:
              // tslint:disable-next-line:quotemark
              'oConn.Provider = "EXOLEDB.DataSource" oConn.Open = "http://myServerName/myVirtualRootName"'
          }
        ]
      },
      {
        databaseName: "Firebird",
        connectionStringDetails: [
          {
            description: "Firebird ODBC Connection String",
            connectionString:
              "DRIVER=Firebird/InterBase(r) driver;UID=SYSDBA;PWD=mypasswd;DBNAME=c:directorydemo.fdb"
          },
          {
            description: "Firebird OLEDB Connection String",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "User=SYSDBA;Password=mypasswd;Database=demo.fdb;DataSource=localhost;Port=3050;Dialect=3;Charset=NONE;Role=;Connection lifetime=15;Pooling=true;MinPoolSize=0;MaxPoolSize=50;Packet Size=8192;ServerType=0"
          }
        ]
      }
    ];
    return connectionStrings;
  }
}
