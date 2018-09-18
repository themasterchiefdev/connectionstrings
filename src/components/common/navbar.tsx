import * as React from "react";

// Props to set the header value
export interface INavbarProps {
  header: string;
}
/**
 * Define Webpage header
 * @param {string} header - Text to be displayed as Header
 * @example
 *  <Navbar header="Insert Webpage Header"/>
 */
const Navbar: React.SFC<INavbarProps> = (props: INavbarProps) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
        {props.header}
      </a>
    </nav>
  );
};

export default Navbar;
