/* tslint:disable:object-literal-sort-keys */

// This class returns the JSON required to render the component.
// All the connection strings are stored as JSON objects as this removes the need for building a database for storage.

/**
 * Interface which has to be used as a blueprint for adding new connection strings.
 * @interface IConnectionStringProvider
 */
export interface IConnectionStringProvider {
  databaseName: string;
  connectionStringDetails: IConnectionStringDetails[];
}
/**
 * Interface which defines the connection string description and its value
 *  @interface IConnectionStringDetails
 */
export interface IConnectionStringDetails {
  description: string;
  connectionString: string;
  connectionType: ConnectionStringType;
}

enum ConnectionStringType {
  database = "Database",
  trusted = "Trusted"
}
/**
 * Creates a new instance of the ConnectionStringsJSON for returning the connection string values.
 * @class ConnectionStringsJSON
 */
export default class ConnectionStringsJSON {
  public getAllConnectionStrings(): IConnectionStringProvider[] {
    const connectionStrings: IConnectionStringProvider[] = [
      {
        databaseName: "Access",

        connectionStringDetails: [
          {
            description: "Access ODBC Connection String Driver",
            connectionString:
              "{Microsoft Access Driver (*.mdb)};Dbq=rajivsservername.mdb;Uid=Admin;Pwd=;",
            connectionType: ConnectionStringType.database
          }
        ]
      },
      {
        databaseName: "DB2",
        connectionStringDetails: [
          {
            description: "DB2 ODBC Connection String",
            connectionString:
              "driver={IBM DB2 ODBC DRIVER};Database=demodb;hostname=rajivsservername;port=myPortNum;protocol=TCPIP; uid=myusername; pwd=mypasswd",
            connectionType: ConnectionStringType.database
          },
          {
            description: "DB2 OLEDB Connection String",
            connectionString:
              "Provider=IBMDADB2;Database=demodeb;HOSTNAME=rajivsservername;PROTOCOL=TCPIP;PORT=50000;uid=myusername;pwd=mypasswd;",
            connectionType: ConnectionStringType.database
          }
        ]
      },
      {
        databaseName: "DBase",

        connectionStringDetails: [
          {
            description: "DBase ODBC Connection String",
            connectionString:
              "Driver={Microsoft dBASE Driver (*.dbf)};DriverID=277;Dbq=c:directory;",
            connectionType: ConnectionStringType.trusted
          },
          {
            description: "DBase OLEDB Connection String",
            connectionString:
              "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=c:directory;Extended Properties=dBASE IV;User ID=Admin;Password=",
            connectionType: ConnectionStringType.database
          }
        ]
      },
      {
        databaseName: "Excel",
        connectionStringDetails: [
          {
            description: "Excel ODBC Connection String",
            connectionString:
              "Driver={Microsoft Excel Driver (*.xls)};DriverId=790;Dbq=C:rajivsservername.xls;DefaultDir=c:directory;",
            connectionType: ConnectionStringType.trusted
          },
          {
            description: "Excel OLEDB Connection String",
            connectionString:
              "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:rajivsservername.xls;Extended Properties='" +
              "Excel 8.0; HDR=Yes; IMEX=1" +
              "'",
            connectionType: ConnectionStringType.trusted
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
              'oConn.Provider = "EXOLEDB.DataSource" oConn.Open = "http://rajivsservername/myVirtualRootName"',
            connectionType: ConnectionStringType.trusted
          }
        ]
      },
      {
        databaseName: "Firebird",
        connectionStringDetails: [
          {
            description: "Firebird ODBC Connection String",
            connectionString:
              "DRIVER=Firebird/InterBase(r) driver;UID=SYSDBA;PWD=mypasswd;DBNAME=c:rajivsservername.fdb",
            connectionType: ConnectionStringType.database
          },
          {
            description: "Firebird OLEDB Connection String",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "User=SYSDBA;Password=mypasswd;Database=rajivsservername.fdb;DataSource=localhost;Port=3050;Dialect=3;Charset=NONE;Role=;Connection lifetime=15;Pooling=true;MinPoolSize=0;MaxPoolSize=50;Packet Size=8192;ServerType=0",
            connectionType: ConnectionStringType.database
          }
        ]
      },
      {
        databaseName: "Microsoft SQL Server",
        connectionStringDetails: [
          {
            description: "SQL Server ODBC Connection String - Database Login",
            connectionString:
              "Driver={SQL Server};Server=rajivsservername;Database=mydemodb;Uid=myusername;Pwd=mypasswd;",
            connectionType: ConnectionStringType.database
          },
          {
            description:
              "SQL Server ODBC Connection String - Trusted Connection",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "Driver={SQL Server};Server=rajivsservername;Database=mydemodb;Trusted_Connection=yes;",
            connectionType: ConnectionStringType.trusted
          },
          {
            description: "SQL Server OLEDB Connection String - Database Login",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "Provider=sqloledb;Data Source=rajivsservername;Initial Catalog=mydemodb;User Id=myusername;Password=mypasswd;",
            connectionType: ConnectionStringType.database
          },
          {
            description:
              "SQL Server OLEDB Connection String - Trusted Connection",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "Provider=sqloledb;Data Source=rajivsservername;Initial Catalog=mydemodb;Integrated Security=SSPI;",
            connectionType: ConnectionStringType.trusted
          },
          {
            description: "SQL Server .Net Connection String - Database Login",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "Server=rajivsservername;Database=mydemodb;User ID=myusername;Password=mypasswd;Trusted_Connection=False",
            connectionType: ConnectionStringType.database
          },
          {
            description:
              "SQL Server .Net Connection String - Trusted Connection",
            connectionString:
              // tslint:disable-next-line:max-line-length
              "Server=rajivsservername;Database=mydemodb;Integrated Security=SSPI;",
            connectionType: ConnectionStringType.trusted
          }
        ]
      }
    ];
    return connectionStrings;
  }

  public getConnectionStringDetails(
    dbProvider: string
  ): IConnectionStringDetails[] {
    const s = this.getAllConnectionStrings().filter(
      x => x.databaseName === dbProvider
    );
    const st: IConnectionStringDetails[] = [];
    s.map(cs => cs.connectionStringDetails.map(cs1 => st.push(cs1)));
    return st;
  }

  public getConnectionStringDetailsFilteredByConnectionType(
    dbProvider: string,
    connectionType: string
  ) {
    const s = this.getAllConnectionStrings().filter(
      x => x.databaseName === dbProvider
    );
    const st: IConnectionStringDetails[] = [];
    s.map(cs => cs.connectionStringDetails.map(cs1 => st.push(cs1)));
    return st.filter(y => y.connectionType === connectionType);
  }
}
